package rook.core;

import com.google.common.collect.Iterables;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.IntValue;
import react.RList;

public class BoardState {
  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();
  /**
   * The index of the currently selected piece in the [pieces] list.
   * Or -1 if nothing is selected.
   */
  public final IntValue selectedPieceIndex = new IntValue(-1);

  public int pieceIndexAtPos(final int pos) {
    pieces.stream().filter(piece -> piece.pos.get() == pos).findFirst();
    return Iterables.indexOf(pieces, piece -> piece.pos.get() == pos);
  }
}
