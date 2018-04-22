package rook.core;

import org.junit.jupiter.api.Test;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;

import java.util.BitSet;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static rook.core.BitSetUtils.newBitSet;

public class PieceMovesTest {

  private final IDimension dim = new Dimension(8, 8);
  @Test
  void rookShouldNotMoveOnOccupiedSquareWithCapture() {
    BitSet moves = PieceMoves.rookMoves(dim, 0, newBitSet(2, 16), newBitSet(2), new BitSet());
    assertEquals(newBitSet(1, 8), moves);
  }
}
