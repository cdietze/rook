package rook.core;

import react.IntValue;

public class Piece {
  enum Type {
    BISHOP,
    KING,
    ROOK
  }

  public final Type type;
  public final IntValue pos;

  public Piece(Type type, int pos) {
    this.type = type;
    this.pos = new IntValue(pos);
  }
}
