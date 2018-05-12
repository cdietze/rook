package rook.core;

import com.google.common.base.MoreObjects;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Iterables;
import com.google.errorprone.annotations.Immutable;
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

  public final Signal<PieceMovedEvent> pieceMoved = Signal.create();

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

  public GameState(Random random, Log log, boolean fog) {
    this.random = random;
    this.log = log;
    if (fog) fogSquares.addAll(IntStream.range(0, dim.width() * dim.height()).boxed().collect(Collectors.toList()));
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

  public final ValueView<BitSet> blockedSquaresForPlayer;

  {
    Value<BitSet> result = Value.create(new BitSet());
    fogSquares.connect(new RSet.Listener<Integer>() {
      @Override
      public void onAdd(Integer elem) {
        result.update(calcBlockedSquaresForPlayer(new BitSet()));
      }
      @Override
      public void onRemove(Integer elem) {
        result.update(calcBlockedSquaresForPlayer(new BitSet()));
      }
    });
    playerPieceSquares.connect(x -> result.update(calcBlockedSquaresForPlayer(new BitSet())));
    enemyPieceSquares.connect(x -> result.update(calcBlockedSquaresForPlayer(new BitSet())));
    result.update(calcBlockedSquaresForPlayer(new BitSet()));
    blockedSquaresForPlayer = result;
  }

  private BitSet calcBlockedSquaresForPlayer(BitSet result) {
    fogSquares.forEach(result::set);
    // System.out.println("calcBlockedSquaresForPlayer, result:" + result + ", fog: " + fogSquares + ", playerPieceSquares:" + playerPieceSquares.get() + ", enemyPieceSquares:" + enemyPieceSquares.get());
    return result;
  }

  public final ValueView<BitSet> pieceSquares;

  {
    Value<BitSet> result = Value.create(new BitSet());
    playerPieceSquares.connect(x -> result.update(calcPieceSquares(new BitSet())));
    enemyPieceSquares.connect(x -> result.update(calcPieceSquares(new BitSet())));
    result.update(calcPieceSquares(new BitSet()));
    pieceSquares = result;
  }

  /**
   * Enemies are blocked by nothing
   */
  public final ValueView<BitSet> blockedSquaresForEnemy = Value.create(new BitSet());

  private BitSet calcPieceSquares(BitSet result) {
    result.or(playerPieceSquares.get());
    result.or(enemyPieceSquares.get());
    // System.out.println("calcPieceSquares, result:" + result + ", playerPieceSquares:" + playerPieceSquares.get() + ", enemyPieceSquares:" + enemyPieceSquares.get());
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
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos, blockedSquaresForPlayer.get(), pieceSquares.get(), new BitSet());
    if (moves.get(dest)) {
      int pieceIndex = pieces.indexOf(piece);
      checkState(pieceIndex >= 0);
      int posX = toX(dim, piece.pos);
      int posY = toY(dim, piece.pos);
      int destX = toX(dim, dest);
      int destY = toY(dim, dest);
      Direction dir = Direction.fromVector(destX - posX, destY - posY);
      ImmutableList<ConsequenceEvent> pushedEvents = calcPushList(destX, destY, dir, ImmutableList.builder()).build();
      Piece newPiece = piece.copy().pos(dest).build();
      PieceMovedEvent movedEvent = new PieceMovedEvent(newPiece, piece.pos, pushedEvents, Optional.empty());
      applyPieceMovedEvent(movedEvent);
      pieceMoved.emit(movedEvent);
      moveEnemyPieces();
      return true;
    } else {
      return false;
    }
  }

  private void applyPieceMovedEvent(PieceMovedEvent movedEvent) {
    movedEvent.capture.ifPresent(piece -> pieces.remove(pieceIndexById(piece.id)));
    movedEvent.consequences.forEach(e -> {
      if (e instanceof PiecePushedEvent) {
        PiecePushedEvent e2 = (PiecePushedEvent) e;
        Piece pushedPiece = e2.piece.copy().pos(e2.destIndex(dim)).build();
        pieces.set(pieceIndexById(e2.piece.id), pushedPiece);
      } else if (e instanceof PiecePushedOverBoard) {
        PiecePushedOverBoard e2 = (PiecePushedOverBoard) e;
        pieces.remove(pieceIndexById(e2.piece.id));
      }
    });
    pieces.set(pieceIndexById(movedEvent.piece.id), movedEvent.piece);
  }

  private ImmutableList.Builder<ConsequenceEvent> calcPushList(int pushedX, int pushedY, Direction dir, ImmutableList.Builder<ConsequenceEvent> result) {
    if (!contains(dim, pushedX, pushedY)) return result;
    int pushedPos = toIndex(dim, pushedX, pushedY);
    Optional<Piece> piece = pieceAtPos(pushedPos);
    if (!piece.isPresent()) return result;
    int destX = pushedX + dir.x();
    int destY = pushedY + dir.y();
    result.add(contains(dim, destX, destY)
            ? new PiecePushedEvent(piece.get(), dir, pushedPos)
            : new PiecePushedOverBoard(piece.get(), dir));
    // The pushed may become the pusher
    calcPushList(destX, destY, dir, result);
    return result;
  }

  private void moveEnemyPieces() {
    // Execute planned intentions
    moveIntentions.forEach((intention) -> {
      int pieceIndex = pieceIndexById(intention.pieceId);
      if (pieceIndex < 0) return;
      Piece piece = pieces.get(pieceIndex);
      int dest = intention.calcDest(this).get();
      if (piece.pos != dest) {
        int posX = toX(dim, piece.pos);
        int posY = toY(dim, piece.pos);
        int destX = toX(dim, dest);
        int destY = toY(dim, dest);
        Direction dir = Direction.fromVector(destX - posX, destY - posY);
        int pieceAtDestIndex = pieceIndexByPos(dest);
        Optional<Piece> capture = (pieceAtDestIndex >= 0 && pieces.get(pieceAtDestIndex).side == Piece.Side.PLAYER)
                ? Optional.of(pieces.get(pieceAtDestIndex))
                : Optional.empty();
        ImmutableList<ConsequenceEvent> pushedEvents = capture.isPresent()
                ? ImmutableList.of()
                : calcPushList(destX, destY, dir, ImmutableList.builder()).build();
        PieceMovedEvent movedEvent = new PieceMovedEvent(piece.copy().pos(dest).build(),
                piece.pos,
                pushedEvents,
                capture);
        applyPieceMovedEvent(movedEvent);
        pieceMoved.emit(movedEvent);
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
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos, blockedSquaresForEnemy.get(), playerPieceSquares.get(), new BitSet());
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

@Immutable
class PieceMovedEvent {
  /**
   * The piece after the move
   */
  public final Piece piece;
  public final int oldPos;
  public final Optional<Piece> capture;
  public final ImmutableList<ConsequenceEvent> consequences;

  PieceMovedEvent(Piece piece, int oldPos, ImmutableList<ConsequenceEvent> consequences, Optional<Piece> capture) {
    this.piece = piece;
    this.oldPos = oldPos;
    this.consequences = consequences;
    this.capture = capture;
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("oldPos", oldPos)
            .add("capture", capture)
            .add("consequences", consequences)
            .toString();
  }
}

@Immutable
interface ConsequenceEvent {
}

@Immutable
class PiecePushedEvent implements ConsequenceEvent {
  /**
   * The piece before the push
   */
  public final Piece piece;
  public final Direction dir;
  public final int oldPos;
  public PiecePushedEvent(Piece piece, Direction dir, int oldPos) {
    this.piece = piece;
    this.dir = dir;
    this.oldPos = oldPos;
  }

  public int destX(IDimension dim) { return toX(dim, piece.pos) + dir.x(); }
  public int destY(IDimension dim) { return toY(dim, piece.pos) + dir.y(); }
  public int destIndex(IDimension dim) { return piece.pos + dir.x() + dim.width() * dir.y(); }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("oldPos", oldPos)
            .toString();
  }
}

@Immutable
class PiecePushedOverBoard implements ConsequenceEvent {
  /**
   * The piece before being pushed off the board
   */
  public final Piece piece;
  public final Direction dir;

  public PiecePushedOverBoard(Piece piece, Direction dir) {
    this.piece = piece;
    this.dir = dir;
  }

  public int destX(IDimension dim) { return toX(dim, piece.pos) + dir.x(); }
  public int destY(IDimension dim) { return toY(dim, piece.pos) + dir.y(); }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("dir", dir)
            .toString();
  }
}
