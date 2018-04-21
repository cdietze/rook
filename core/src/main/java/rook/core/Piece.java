package rook.core;

import com.google.common.base.MoreObjects;
import com.google.errorprone.annotations.Immutable;

@Immutable
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

  public final int id;
  public final Side side;
  public final Type type;
  public final int pos;

  public Piece(int id, Side side, Type type, int pos) {
    this.id = id;
    this.side = side;
    this.type = type;
    this.pos = pos;
  }

  public Piece(Side side, Type type, int pos) {
    this(idCounter++, side, type, pos);
  }

  private Piece(Builder builder) {
    id = builder.id;
    side = builder.side;
    type = builder.type;
    pos = builder.pos;
  }

  public Builder copy() {
    return newBuilder(this);
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("id", id)
            .add("side", side)
            .add("type", type)
            .add("pos", pos)
            .toString();
  }

  private static int idCounter = 0;

  public static Builder newBuilder() {
    return new Builder();
  }

  public static Builder newBuilder(Piece copy) {
    Builder builder = new Builder();
    builder.id = copy.id;
    builder.side = copy.side;
    builder.type = copy.type;
    builder.pos = copy.pos;
    return builder;
  }

  public static final class Builder {
    private int id;
    private Side side;
    private Type type;
    private int pos;
    private Builder() {}
    public Builder id(int id) {
      this.id = id;
      return this;
    }
    public Builder side(Side side) {
      this.side = side;
      return this;
    }
    public Builder type(Type type) {
      this.type = type;
      return this;
    }
    public Builder pos(int pos) {
      this.pos = pos;
      return this;
    }
    public Piece build() {
      return new Piece(this);
    }
  }
}
