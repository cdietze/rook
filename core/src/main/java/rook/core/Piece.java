package rook.core;

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
}
