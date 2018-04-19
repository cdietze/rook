package rook.core;

public enum Direction {
  UP {
    @Override
    public int x() { return 0; }
    @Override
    public int y() { return -1; }
  },
  UP_RIGHT {
    @Override
    public int x() { return 1; }
    @Override
    public int y() { return -1; }
  },
  RIGHT {
    @Override
    public int x() { return 1; }
    @Override
    public int y() { return 0; }
  },
  DOWN_RIGHT {
    @Override
    public int x() { return 1; }
    @Override
    public int y() { return 1; }
  },
  DOWN {
    @Override
    public int x() { return 0; }
    @Override
    public int y() { return 1; }
  },
  DOWN_LEFT {
    @Override
    public int x() { return -1; }
    @Override
    public int y() { return 1; }
  },
  LEFT {
    @Override
    public int x() { return -1; }
    @Override
    public int y() { return 0; }
  },
  UP_LEFT {
    @Override
    public int x() { return -1; }
    @Override
    public int y() { return -1; }
  };

  public abstract int x();
  public abstract int y();

  static Direction fromVector(int offX, int offY) {
    if (offY < 0) {
      // UP_...
      if (offX > 0) return UP_RIGHT;
      if (offX < 0) return UP_LEFT;
      return UP;
    } else if (offY > 0) {
      // DOWN_...
      if (offX > 0) return DOWN_RIGHT;
      if (offX < 0) return DOWN_LEFT;
      return DOWN;
    } else {
      if (offX > 0) return RIGHT;
      if (offX < 0) return LEFT;
      throw new IllegalArgumentException("Cannot convert to Direction: offX:" + offX + ", offY:" + offY);
    }
  }
}
