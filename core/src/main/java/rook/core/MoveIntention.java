package rook.core;

import com.google.common.base.MoreObjects;
import react.Closeable;
import react.IntValue;

import java.util.BitSet;

public class MoveIntention {

  public final int pieceId;
  public final Direction dir;
  public final int moveLength;
  public final IntValue dest;

  private final GameState state;
  private final Closeable conn;

  public MoveIntention(GameState state, int pieceId, Direction dir, int moveLength) {
    this.state = state;
    this.pieceId = pieceId;
    this.dir = dir;
    this.moveLength = moveLength;
    this.dest = new IntValue(calcDest());
    this.conn = state.occupiedSquaresForEnemy.connect(x -> dest.update(this.calcDest()));
  }

  public void close() {
    conn.close();
  }

  private int calcDest() {
    BitSet opponent = new BitSet();
    state.playerPieces().forEach(p -> opponent.set(p.pos));
    int pieceIndex = state.pieceIndexById(pieceId);
    Piece piece = state.pieces.get(pieceIndex);
    int result = PieceMoves.slideInDir(state.dim, piece.pos, dir, state.occupiedSquaresForEnemy.get(), opponent, moveLength);
    // System.out.println("MoveIntention#calcDest, result:" + result + ", this:" + this);
    return result;
  }

  @Override
  public String toString() {
    //noinspection ConstantConditions
    return MoreObjects.toStringHelper(this)
            .add("pieceId", pieceId)
            .add("dir", dir)
            .add("moveLength", moveLength)
            .add("dest", (dest == null) ? null : dest.get())
            .toString();
  }
}
