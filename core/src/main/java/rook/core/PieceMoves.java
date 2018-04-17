package rook.core;

import de.cdietze.playn_util.PointUtils;
import pythagoras.i.IDimension;

import java.util.BitSet;

import static de.cdietze.playn_util.PointUtils.*;

public class PieceMoves {

  /**
   * @returns a BitSet containing all possible destinations for the given piece.
   */
  public static BitSet moves(IDimension dim, Piece.Type type, int pos, BitSet passable, BitSet result) {
    switch (type) {
      case BISHOP:
        return bishopMoves(dim, pos, passable, result);
      case KING:
        return kingMoves(dim, pos, passable, result);
      case ROOK:
        return rookMoves(dim, pos, passable, result);
    }
    throw new RuntimeException("unknown piece type: " + type);
  }

  public static BitSet kingMoves(IDimension dim, int pos, BitSet passable, BitSet result) {
    PointUtils.borderingNeighbors(dim, pos, result);
    result.and(passable);
    return result;
  }

  public static BitSet bishopMoves(IDimension dim, int pos, BitSet passable, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    // up-left
    ray(dim, x, y, -1, -1, passable, result);
    // up-right
    ray(dim, x, y, 1, -1, passable, result);
    // down-right
    ray(dim, x, y, 1, 1, passable, result);
    // down-left
    ray(dim, x, y, -1, 1, passable, result);
    return result;
  }

  public static BitSet rookMoves(IDimension dim, int pos, BitSet passable, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    // up
    ray(dim, x, y, 0, -1, passable, result);
    // right
    ray(dim, x, y, 1, 0, passable, result);
    // down
    ray(dim, x, y, 0, 1, passable, result);
    // left
    ray(dim, x, y, -1, 0, passable, result);
    return result;
  }

  private static BitSet ray(IDimension dim, int x, int y, int offX, int offY, BitSet passable, BitSet result) {
    for (int i = 1; contains(dim, x + i * offX, y + i * offY); i++) {
      int p = toIndex(dim, x + i * offX, y + i * offY);
      if (!passable.get(p)) break;
      result.set(p);
    }
    return result;
  }
}
