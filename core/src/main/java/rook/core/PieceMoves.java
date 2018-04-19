package rook.core;

import de.cdietze.playn_util.PointUtils;
import pythagoras.i.IDimension;

import java.util.BitSet;

import static de.cdietze.playn_util.PointUtils.*;
import static rook.core.Direction.*;

public class PieceMoves {

  /**
   * @returns a BitSet containing all possible destinations for the given piece.
   */
  public static BitSet moves(IDimension dim, Piece.Type type, int pos, BitSet occupied, BitSet opponent, BitSet result) {
    switch (type) {
      case BISHOP:
        return bishopMoves(dim, pos, occupied, opponent, result);
      case KING:
        return kingMoves(dim, pos, occupied, opponent, result);
      case ROOK:
        return rookMoves(dim, pos, occupied, opponent, result);
    }
    throw new RuntimeException("unknown piece type: " + type);
  }

  public static BitSet kingMoves(IDimension dim, int pos, BitSet occupied, BitSet opponent, BitSet result) {
    PointUtils.borderingNeighbors(dim, pos, result);
    result.andNot(occupied);
    return result;
  }

  @SuppressWarnings("Duplicates")
  public static BitSet bishopMoves(IDimension dim, int pos, BitSet occupied, BitSet opponent, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    slide(dim, x, y, UP_LEFT, occupied, opponent, result);
    slide(dim, x, y, UP_RIGHT, occupied, opponent, result);
    slide(dim, x, y, DOWN_RIGHT, occupied, opponent, result);
    slide(dim, x, y, DOWN_LEFT, occupied, opponent, result);
    return result;
  }

  @SuppressWarnings("Duplicates")
  public static BitSet rookMoves(IDimension dim, int pos, BitSet occupied, BitSet opponent, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    slide(dim, x, y, UP, occupied, opponent, result);
    slide(dim, x, y, RIGHT, occupied, opponent, result);
    slide(dim, x, y, DOWN, occupied, opponent, result);
    slide(dim, x, y, LEFT, occupied, opponent, result);
    return result;
  }

  private static BitSet slide(IDimension dim, int x, int y, Direction dir, BitSet occupied, BitSet opponent, BitSet result) {
    for (int i = 1; contains(dim, x + i * dir.x(), y + i * dir.y()); i++) {
      int p = toIndex(dim, x + i * dir.x(), y + i * dir.y());
      if (opponent.get(p)) {
        result.set(p);
        break;
      }
      if (occupied.get(p)) break;
      result.set(p);
    }
    return result;
  }

  /**
   * @returns the index of the destination square when a piece on `pos` square moves (slides) in x,dirY up to `moveLength` times.
   * If the piece hits an impassable square on its way, the last passable square is returned.
   */
  public static int slideInDir(IDimension dim, int pos, Direction dir, BitSet occupied, BitSet opponent, int moveLength) {
    int curPos = pos;
    int posX = toX(dim, pos);
    int posY = toY(dim, pos);
    for (int i = 1; i <= moveLength && contains(dim, posX + i * dir.x(), posY + i * dir.y()); i++) {
      int p = toIndex(dim, posX + i * dir.x(), posY + i * dir.y());
      if (opponent.get(p)) return p;
      if (occupied.get(p)) return curPos;
      else curPos = p;
    }
    return curPos;
  }
}
