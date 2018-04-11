package rook.core;

import de.cdietze.playn_util.PointUtils;
import pythagoras.i.IDimension;

import java.util.BitSet;

import static de.cdietze.playn_util.PointUtils.toX;
import static de.cdietze.playn_util.PointUtils.toY;

public class PieceMoves {

  public static BitSet moves(IDimension dim, Piece.Type type, int pos, BitSet result) {
    switch (type) {
      case BISHOP:
        return bishopMoves(dim, pos, result);
      case KING:
        return kingMoves(dim, pos, result);
      case ROOK:
        return rookMoves(dim, pos, result);
    }
    throw new RuntimeException("unknown piece type: " + type);
  }

  public static BitSet kingMoves(IDimension dim, int pos, BitSet result) {
    return PointUtils.borderingNeighbors(dim, pos, result);
  }

  public static BitSet bishopMoves(IDimension dim, int pos, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    int w = dim.width();
    int h = dim.height();
    // up-left
    for (int i = 1; y - i >= 0 && x - i >= 0; i++) { result.set(pos - i - (i * w)); }
    // up-right
    for (int i = 1; y - i >= 0 && x + i < w; i++) { result.set(pos + i - (i * w)); }
    // down-right
    for (int i = 1; y + i < h && x + i < w; i++) { result.set(pos + i + (i * w)); }
    // down-left
    for (int i = 1; y + i < h && x - i >= 0; i++) { result.set(pos - i + (i * w)); }
    return result;
  }

  public static BitSet rookMoves(IDimension dim, int pos, BitSet result) {
    int x = toX(dim, pos);
    int y = toY(dim, pos);
    int w = dim.width();
    int h = dim.height();
    // up
    for (int i = 1; y - i >= 0; i++) { result.set(pos - (i * w)); }
    // right
    for (int i = 1; x + i < w; i++) { result.set(pos + i); }
    // down
    for (int i = 1; y + i < h; i++) { result.set(pos + (i * w)); }
    // left
    for (int i = 1; x - i >= 0; i++) { result.set(pos - i); }
    return result;
  }
}
