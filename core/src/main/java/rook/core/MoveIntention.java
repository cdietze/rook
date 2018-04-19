package rook.core;

import com.google.common.base.MoreObjects;
import pythagoras.i.IPoint;
import react.IntValue;

import java.util.BitSet;

public class MoveIntention {

  public final Piece piece;
  public final IPoint dir;
  public final int moveLength;

  public final IntValue dest;

  private final GameState state;

  public MoveIntention(GameState state, Piece piece, IPoint dir, int moveLength) {
    this.state = state;
    this.piece = piece;
    this.dir = dir;
    this.moveLength = moveLength;
    this.dest = new IntValue(calcDest());
    state.occupiedSquaresForEnemy.connect(x -> this.calcDest());
  }

  private int calcDest() {
    BitSet opponent = new BitSet();
    state.playerPieces().forEach(p -> opponent.set(p.pos.get()));
    return PieceMoves.slideInDir(state.dim, piece.pos.get(), dir.x(), dir.y(), state.occupiedSquaresForEnemy.get(), opponent, moveLength);
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("piece", piece)
            .add("dir", dir)
            .add("moveLength", moveLength)
            .add("dest", dest.get())
            .toString();
  }
}
