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
import static de.cdietze.playn_util.PointUtils.*;

public class GameState {

  private final Random random;
  private final Log log;

  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();

  public final RSet<Integer> fogSquares = RSet.create();

  public final Signal<Piece> pieceMoved = Signal.create();

  public final Value<BitSet> playerPieceSquares = Value.create(calcPlayerPieceSquares(new BitSet()));
  public final Value<BitSet> enemyPieceSquares = Value.create(calcEnemyPieceSquares(new BitSet()));

  private void updatePiecesBitSets() {
    playerPieceSquares.update(calcPlayerPieceSquares(new BitSet()));
    enemyPieceSquares.update(calcEnemyPieceSquares(new BitSet()));
  }

  private BitSet calcPlayerPieceSquares(BitSet result) {
    pieces.stream().filter(p -> p.side == Piece.Side.PLAYER).forEach(p -> result.set(p.pos));
    // System.out.println("calcPlayerPieceSquares, result:" + result);
    return result;
  }

  private BitSet calcEnemyPieceSquares(BitSet result) {
    pieces.stream().filter(p -> p.side == Piece.Side.ENEMY).forEach(p -> result.set(p.pos));
    // System.out.println("calcEnemyPieceSquares, result:" + result);
    return result;
  }

  public final Stream<Piece> playerPieces() {
    return pieces.stream().filter(p -> p.side == Piece.Side.PLAYER);
  }
  public final Stream<Piece> enemyPieces() {
    return pieces.stream().filter(p -> p.side == Piece.Side.ENEMY);
  }
  public final Optional<Piece> pieceAtPos(int pos) { return pieces.stream().filter(p -> p.pos == pos).findFirst();}

  /**
   * List of the enemy intentions for the next move.
   * If a player would interfere (e.g. by pushing or destroying an enemy), these values need to be updated timely.
   */
  public final RList<MoveIntention> moveIntentions = RList.create();

  public GameState(Random random, Log log) {
    this.random = random;
    this.log = log;
    fogSquares.addAll(IntStream.range(0, dim.width() * dim.height()).boxed().collect(Collectors.toList()));
    initRevealFogListener();
    initUpdatePiecesBitSetsListener();
  }

  private void initRevealFogListener() {
    pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        if (piece.side == Piece.Side.PLAYER) {
          revealBorderingSquares(piece.pos);
        }
      }

      @Override
      public void onSet(int index, Piece piece) {
        if (piece.side == Piece.Side.PLAYER) {
          revealBorderingSquares(piece.pos);
        }
      }
    });
  }

  private void initUpdatePiecesBitSetsListener() {
    // TODO: optimization: could only update pieces or enemy bitset depending on which piece moved
    pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        updatePiecesBitSets();
      }
      @Override
      public void onRemove(Piece piece) {
        updatePiecesBitSets();
      }
      @Override
      public void onSet(int index, Piece newElem) {
        updatePiecesBitSets();
      }
    });
  }

  public final ValueView<BitSet> occupiedSquaresForPlayer;

  {
    Value<BitSet> result = Value.create(new BitSet());
    fogSquares.connect(new RSet.Listener<Integer>() {
      @Override
      public void onAdd(Integer elem) {
        result.update(calcOccupiedSquaresForPlayer(new BitSet()));
      }
      @Override
      public void onRemove(Integer elem) {
        result.update(calcOccupiedSquaresForPlayer(new BitSet()));
      }
    });
    playerPieceSquares.connect(x -> result.update(calcOccupiedSquaresForPlayer(new BitSet())));
    enemyPieceSquares.connect(x -> result.update(calcOccupiedSquaresForPlayer(new BitSet())));
    result.update(calcOccupiedSquaresForPlayer(new BitSet()));
    occupiedSquaresForPlayer = result;
  }

  private BitSet calcOccupiedSquaresForPlayer(BitSet result) {
    fogSquares.forEach(result::set);
    result.or(playerPieceSquares.get());
    result.or(enemyPieceSquares.get());
    // System.out.println("calcOccupiedSquaresForPlayer, result:" + result + ", fog: " + fogSquares + ", playerPieceSquares:" + playerPieceSquares.get() + ", enemyPieceSquares:" + enemyPieceSquares.get());
    return result;
  }

  public final ValueView<BitSet> pieceSquares;

  {
    Value<BitSet> result = Value.create(new BitSet());
    playerPieceSquares.connect(x -> result.update(calcOccupiedSquaresForEnemy(new BitSet())));
    enemyPieceSquares.connect(x -> result.update(calcOccupiedSquaresForEnemy(new BitSet())));
    result.update(calcOccupiedSquaresForEnemy(new BitSet()));
    pieceSquares = result;
  }

  public final ValueView<BitSet> occupiedSquaresForEnemy = pieceSquares;

  private BitSet calcOccupiedSquaresForEnemy(BitSet result) {
    result.or(playerPieceSquares.get());
    result.or(enemyPieceSquares.get());
    // System.out.println("calcOccupiedSquaresForEnemy, result:" + result + ", playerPieceSquares:" + playerPieceSquares.get() + ", enemyPieceSquares:" + enemyPieceSquares.get());
    return result;
  }

  public int pieceIndexById(final int pieceId) {
    return Iterables.indexOf(pieces, piece -> piece.id == pieceId);
  }

  public Piece pieceById(final int pieceId) {
    return pieces.get(pieceIndexById(pieceId));
  }

  public int pieceIndexByPos(final int pos) {
    return Iterables.indexOf(pieces, piece -> piece.pos == pos);
  }

  public boolean tryMoveSelectedPiece(Piece piece, int dest) {
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos, occupiedSquaresForPlayer.get(), pieceSquares.get(), new BitSet());
    if (moves.get(dest)) {
      int pieceIndex = pieces.indexOf(piece);
      checkState(pieceIndex >= 0);
      int posX = toX(dim, piece.pos);
      int posY = toY(dim, piece.pos);
      int destX = toX(dim, dest);
      int destY = toY(dim, dest);
      Direction dir = Direction.fromVector(destX - posX, destY - posY);
      tryToPush(destX, destY, dir);
      Piece newPiece = piece.copy().pos(dest).build();
      pieces.set(pieceIndex, newPiece);
      pieceMoved.emit(newPiece);
      moveEnemyPieces();
      return true;
    } else {
      return false;
    }
  }

  private void tryToPush(int pushedX, int pushedY, Direction dir) {
    if (!contains(dim, pushedX, pushedY)) return;
    int pushedPos = toIndex(dim, pushedX, pushedY);
    int pieceIndex = pieceIndexByPos(pushedPos);
    if (pieceIndex < 0) return;
    int destX = pushedX + dir.x();
    int destY = pushedY + dir.y();
    // The pushed becomes the pusher
    tryToPush(destX, destY, dir);
    if (!contains(dim, destX, destY)) {
      // Piece was pushed out of bounds
      pieces.remove(pieceIndex);
    } else {
      Piece newPiece = pieces.get(pieceIndex).copy().pos(toIndex(dim, destX, destY)).build();
      pieces.set(pieceIndex, newPiece);
      pieceMoved.emit(newPiece);
    }
  }

  private void moveEnemyPieces() {
    // Execute planned intentions
    moveIntentions.forEach((intention) -> {
      int pieceIndex = pieceIndexById(intention.pieceId);
      if (pieceIndex < 0) return;
      Piece piece = pieces.get(pieceIndex);
      int dest = intention.calcDest(this).get();
      if (piece.pos != dest) {
        int pieceAtDestIndex = pieceIndexByPos(dest);
        if (pieceAtDestIndex >= 0) {
          pieces.remove(pieceAtDestIndex);
        }
        Piece newPiece = piece.copy().pos(dest).build();
        // pieces index may have changed in the meantime
        int pieceIndex2 = pieceIndexById(intention.pieceId);
        pieces.set(pieceIndex2, newPiece);
        pieceMoved.emit(newPiece);
      }
    });

    // Make intentions for next move
    moveIntentions.clear();
    enemyPieces().forEach(piece -> {
      OptionalInt moveDest = pickEnemyMove(piece);
      if (moveDest.isPresent()) {
        int x = toX(dim, piece.pos);
        int y = toY(dim, piece.pos);
        int destX = toX(dim, moveDest.getAsInt());
        int destY = toY(dim, moveDest.getAsInt());
        int vecX = destX - x;
        int vecY = destY - y;
        int moveLength = Math.max(Math.abs(vecX), Math.abs(vecY));
        Direction dir = Direction.fromVector(destX - x, destY - y);
        moveIntentions.add(new MoveIntention(piece.id, dir, moveLength));
      }
    });
    log.debug("Made intentions for next move: " + moveIntentions);
  }

  private OptionalInt pickEnemyMove(Piece piece) {
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos, occupiedSquaresForEnemy.get(), playerPieceSquares.get(), new BitSet());
    OptionalInt playerKing = BitSetUtils.findFirst(moves, i -> {
      Optional<Piece> t = pieceAtPos(i);
      return t.isPresent() && t.get().side == Piece.Side.PLAYER && t.get().type == Piece.Type.KING;
    });
    if (playerKing.isPresent()) return playerKing;
    return BitSetUtils.randomElement(random, moves);
  }

  private void revealBorderingSquares(int pos) {
    fogSquares.remove(pos);
    BitSet set = PointUtils.borderingNeighbors(dim, pos, new BitSet());
    BitSetUtils.forEach(set, fogSquares::remove);
  }
}
