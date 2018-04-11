package rook.core;

import de.cdietze.playn_util.PointUtils;
import pythagoras.i.IDimension;

import java.util.BitSet;

import static de.cdietze.playn_util.PointUtils.*;

public class PieceMoves {

  public static BitSet moves(IDimension dim, Piece.Type type, int pos, BitSet occupied, BitSet result) {
    switch (type) {
      case BISHOP:
        return bishopMoves(dim, pos, occupied, result);
      case KING:
        return kingMoves(dim, pos, occupied, result);
      case ROOK:
        return rookMoves(dim, pos, occupied, result);
    }
    throw new RuntimeException("unknown piece type: " + type);
  }

  public static BitSet kingMoves(IDimension dim, int pos, BitSet occupied, BitSet result) {
    PointUtils.borderingNeighbors(dim, pos, result);
    result.andNot(occupied);
    return result;
  }

  public static BitSet bishopMoves(IDimension dim, int pos, BitSet occupied, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    // up-left
    ray(dim, x, y, -1, -1, occupied, result);
    // up-right
    ray(dim, x, y, 1, -1, occupied, result);
    // down-right
    ray(dim, x, y, 1, 1, occupied, result);
    // down-left
    ray(dim, x, y, -1, 1, occupied, result);
    return result;
  }

  public static BitSet rookMoves(IDimension dim, int pos, BitSet occupied, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    // up
    ray(dim, x, y, 0, -1, occupied, result);
    // right
    ray(dim, x, y, 1, 0, occupied, result);
    // down
    ray(dim, x, y, 0, 1, occupied, result);
    // left
    ray(dim, x, y, -1, 0, occupied, result);
    return result;
  }

  private static BitSet ray(IDimension dim, int x, int y, int offX, int offY, BitSet occupied, BitSet result) {
    for (int i = 1; contains(dim, x + i * offX, y + i * offY); i++) {
      int p = toIndex(dim, x + i * offX, y + i * offY);
      if (occupied.get(p)) break;
      result.set(p);
    }
    return result;
  }
}
