package rook.core;

import com.google.common.base.MoreObjects;
import react.IntValue;

public class Piece {
  enum Type {
    BISHOP,
    KING,
    ROOK,
  }

  enum Side {
    PLAYER,
    ENEMY,
  }

  public final Side side;
  public final Type type;
  public final IntValue pos;

  public Piece(Side side, Type type, int pos) {
    this.side = side;
    this.type = type;
    this.pos = new IntValue(pos);
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("side", side)
            .add("type", type)
            .add("pos", pos.get())
            .toString();
  }
}
