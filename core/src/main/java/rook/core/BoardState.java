package rook.core;

import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.RList;

public class BoardState {
  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();
}

