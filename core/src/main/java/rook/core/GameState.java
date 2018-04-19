package rook.core;

import com.google.common.collect.Iterables;
import de.cdietze.playn_util.PointUtils;
import playn.core.Log;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.*;

import java.util.BitSet;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static com.google.common.base.Preconditions.checkState;
import static de.cdietze.playn_util.PointUtils.toX;
import static de.cdietze.playn_util.PointUtils.toY;

public class GameState {

  private final Random random;
  private final Log log;

  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();

  public final RSet<Integer> fogSquares = RSet.create();

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

  public final Value<BitSet> playerPieceSquares = Value.create(calcPlayerPieceSquares(new BitSet()));
  public final Value<BitSet> enemyPieceSquares = Value.create(calcEnemyPieceSquares(new BitSet()));

  private void updatePiecesBitSets() {
    playerPieceSquares.update(calcPlayerPieceSquares(new BitSet()));
    enemyPieceSquares.update(calcEnemyPieceSquares(new BitSet()));
  }

  private BitSet calcPlayerPieceSquares(BitSet result) {
    pieces.stream().filter(p -> p.side == Piece.Side.PLAYER).forEach(p -> result.set(p.pos.get()));
    // System.out.println("calcPlayerPieceSquares, result:" + result);
    return result;
  }

  private BitSet calcEnemyPieceSquares(BitSet result) {
    pieces.stream().filter(p -> p.side == Piece.Side.ENEMY).forEach(p -> result.set(p.pos.get()));
    // System.out.println("calcEnemyPieceSquares, result:" + result);
    return result;
  }

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

  public GameState(Random random, Log log) {
    this.random = random;
    this.log = log;
    fogSquares.addAll(IntStream.range(0, dim.width() * dim.height()).boxed().collect(Collectors.toList()));
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

    pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        updatePiecesBitSets();
      }
      @Override
      public void onRemove(Piece elem) {
        updatePiecesBitSets();
      }
    });
    pieceMoved.connect(piece -> updatePiecesBitSets());
  }

  // TODO: deduce this from fogSquares + playerPieceSquares + enemyPieceSquares
  public BitSet occupiedSquaresForPlayer(BitSet result) {
    fogSquares.forEach(result::set);
    pieces.forEach(p -> result.set(p.pos.get(), true));
    return result;
  }

  public final ValueView<BitSet> occupiedSquaresForEnemy;

  {
    Value<BitSet> result = Value.create(new BitSet());
    playerPieceSquares.connect(x -> result.update(calcOccupiedSquaresForEnemy(new BitSet())));
    enemyPieceSquares.connect(x -> result.update(calcOccupiedSquaresForEnemy(new BitSet())));
    result.update(calcOccupiedSquaresForEnemy(new BitSet()));
    occupiedSquaresForEnemy = result;
  }

  private BitSet calcOccupiedSquaresForEnemy(BitSet result) {
    result.or(playerPieceSquares.get());
    result.or(enemyPieceSquares.get());
    // System.out.println("calcOccupiedSquaresForEnemy, result:" + result + ", playerPieceSquares:" + playerPieceSquares.get() + ", enemyPieceSquares:" + enemyPieceSquares.get());
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
    } else if (clickedPieceIndex >= 0 && pieces.get(clickedPieceIndex).side == Piece.Side.PLAYER) {
      // Select piece
      selectedPieceIndex.update(clickedPieceIndex);
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
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), occupiedSquaresForPlayer(new BitSet()), enemyPieceSquares.get(), new BitSet());
    if (moves.get(dest)) {
      // TODO: push any existing piece here, recursively
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
      int dest = intention.dest.get();
      if (!piece.pos.get().equals(dest)) {
        piece.pos.update(dest);
        pieceMoved.emit(piece);
      }
      intention.close();
    });

    // Make intentions for next move
    moveIntentions.clear();
    enemyPieces().forEach(piece -> {
      BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), occupiedSquaresForEnemy.get(), playerPieceSquares.get(), new BitSet());
      OptionalInt moveDest = BitSetUtils.randomElement(random, moves);
      if (moveDest.isPresent()) {
        int x = toX(dim, piece.pos.get());
        int y = toY(dim, piece.pos.get());
        int destX = toX(dim, moveDest.getAsInt());
        int destY = toY(dim, moveDest.getAsInt());
        int vecX = destX - x;
        int vecY = destY - y;
        int moveLength = Math.max(Math.abs(vecX), Math.abs(vecY));
        Direction dir = Direction.fromVector(destX - x, destY - y);
        moveIntentions.add(new MoveIntention(this, piece, dir, moveLength));
      }
    });

    log.debug("Made intentions for next move: " + moveIntentions);
  }

  private void revealBorderingSquares(int pos) {
    fogSquares.remove(pos);
    BitSet set = PointUtils.borderingNeighbors(dim, pos, new BitSet());
    for (int i = set.nextSetBit(0); i >= 0; i = set.nextSetBit(i + 1)) {
      fogSquares.remove(i);
    }
  }
}
