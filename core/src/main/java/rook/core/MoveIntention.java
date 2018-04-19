package rook.core;

import com.google.common.base.MoreObjects;
import react.Closeable;
import react.IntValue;

import java.util.BitSet;

public class MoveIntention {

  public final Piece piece;
  public final Direction dir;
  public final int moveLength;
  public final IntValue dest;

  private final GameState state;
  private final Closeable conn;

  public MoveIntention(GameState state, Piece piece, Direction dir, int moveLength) {
    this.state = state;
    this.piece = piece;
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
    state.playerPieces().forEach(p -> opponent.set(p.pos.get()));
    int result = PieceMoves.slideInDir(state.dim, piece.pos.get(), dir, state.occupiedSquaresForEnemy.get(), opponent, moveLength);
    // System.out.println("MoveIntention#calcDest, result:" + result + ", this:" + this);
    return result;
  }

  @Override
  public String toString() {
    //noinspection ConstantConditions
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("dir", dir)
            .add("moveLength", moveLength)
            .add("dest", (dest == null) ? null : dest.get())
            .toString();
  }
}
