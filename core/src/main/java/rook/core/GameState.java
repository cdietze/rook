package rook.core;

import com.google.common.base.MoreObjects;
import com.google.common.collect.Iterables;
import de.cdietze.playn_util.PointUtils;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.*;

import java.util.BitSet;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.Random;
import java.util.stream.Stream;

import static com.google.common.base.Preconditions.checkState;

public class GameState {

  private final Random random;

  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();

  public final RSet<Integer> revealedSquares = RSet.create();

  public final Signal<Piece> pieceMoved = Signal.create();

  /**
   * The index of the currently selected piece in the [pieces] list.
   * Or -1 if nothing is selected.
   */
  public final IntValue selectedPieceIndex = new IntValue(-1);

  public final ValueView<Optional<Piece>> selectedPiece = selectedPieceIndex.map(pieceIndex -> {
    if (pieceIndex < 0) return Optional.empty();
    return Optional.of(pieces.get(pieceIndex));
  });

  public final Stream<Piece> playerPieces() {
    return pieces.stream().filter(p -> p.side == Piece.Side.PLAYER);
  }
  public final Stream<Piece> enemyPieces() {
    return pieces.stream().filter(p -> p.side == Piece.Side.ENEMY);
  }

  /**
   * List of the enemy intentions for the next move.
   * If a player would interfere (e.g. by pushing or destroying an enemy), these values need to be updated timely.
   */
  public final RList<MoveIntention> moveIntentions = RList.create();

  public GameState(Random random) {
    this.random = random;
    pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        if (piece.side == Piece.Side.PLAYER) {
          revealBorderingSquares(piece.pos.get());
        }
      }
    });
    pieceMoved
            .filter(p -> p.side == Piece.Side.PLAYER)
            .connect(piece -> revealBorderingSquares(piece.pos.get()));
  }

  public BitSet passableSquaresForPlayer(BitSet result) {
    revealedSquares.forEach(result::set);
    pieces.forEach(p -> result.set(p.pos.get(), false));
    return result;
  }

  public BitSet passableSquaresForEnemy(BitSet result) {
    result.set(0, dim.width() * dim.height());
    pieces.forEach(p -> result.set(p.pos.get(), false));
    return result;
  }

  public int pieceIndexAtPos(final int pos) {
    return Iterables.indexOf(pieces, piece -> piece.pos.get() == pos);
  }

  public void clickOnSquare(int pos) {
    int clickedPieceIndex = pieceIndexAtPos(pos);
    int selectedPieceIndexValue = selectedPieceIndex.get();
    if (clickedPieceIndex < 0 && selectedPieceIndexValue < 0) {
      // Clicked on no piece while no piece is selected -> ignore
    } else if (clickedPieceIndex == selectedPieceIndexValue) {
      // Clicked on already selected piece -> deselect
      selectedPieceIndex.update(-1);
    } else if (clickedPieceIndex >= 0) {
      Piece piece = pieces.get(clickedPieceIndex);
      if (piece.side == Piece.Side.PLAYER) {
        // Select piece
        selectedPieceIndex.update(clickedPieceIndex);
      }
    } else {
      // Clicked on destination, try to move
      //noinspection ConstantConditions
      checkState(selectedPieceIndexValue >= 0);
      tryMoveSelectedPiece(pos);
    }
  }

  public boolean tryMoveSelectedPiece(int dest) {
    Optional<Piece> optionalPiece = selectedPiece.get();
    if (!optionalPiece.isPresent()) return false;
    Piece piece = optionalPiece.get();
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), passableSquaresForPlayer(new BitSet()), new BitSet());
    if (moves.get(dest)) {
      selectedPieceIndex.update(-1);
      piece.pos.update(dest);
      pieceMoved.emit(piece);
      moveEnemyPieces();
      return true;
    } else {
      return false;
    }
  }

  private void moveEnemyPieces() {
    // Execute planned intentions
    moveIntentions.forEach((intention) -> {
      Piece piece = intention.piece;
      BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), passableSquaresForEnemy(new BitSet()), new BitSet());
      if (!moves.get(intention.destination)) {
        // TODO: Carry move out as far as possible, currently we don't move at all when interrupted
        return;
      }
      piece.pos.update(intention.destination);
      pieceMoved.emit(piece);
    });

    // Make intentions for next move
    moveIntentions.clear();
    enemyPieces().forEach(piece -> {
      BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), passableSquaresForEnemy(new BitSet()), new BitSet());
      OptionalInt moveDest = BitSetUtils.randomElement(random, moves);
      if (moveDest.isPresent()) {
        moveIntentions.add(new MoveIntention(piece, moveDest.getAsInt()));
      }
    });

    System.out.println("Create new moveIntentions: " + moveIntentions);
  }

  private void revealBorderingSquares(int pos) {
    revealedSquares.add(pos);
    BitSet set = PointUtils.borderingNeighbors(dim, pos, new BitSet());
    for (int i = set.nextSetBit(0); i >= 0; i = set.nextSetBit(i + 1)) {
      revealedSquares.add(i);
    }
  }
}

class MoveIntention {
  public final Piece piece;
  public final int destination;

  public MoveIntention(Piece piece, int destination) {
    this.piece = piece;
    this.destination = destination;
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("destination", destination)
            .toString();
  }
}
