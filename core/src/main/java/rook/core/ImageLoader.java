package rook.core;

import playn.core.Image;
import playn.core.Platform;

public class ImageLoader {

  public static Images loadImages(Platform plat) {
    return new ImageLoader(plat).new Images();
  }
  private final Platform plat;
  private ImageLoader(Platform plat) {
    this.plat = plat;
  }

  public class Images {
    public final Image whiteBishop = plat.assets().getImage("images/cburnett/wB.png");
    public final Image whiteKing = plat.assets().getImage("images/cburnett/wK.png");
    public final Image whiteRook = plat.assets().getImage("images/cburnett/wR.png");

    public final Image pieceImage(Piece.Type type) {
      switch (type) {
        case BISHOP:
          return whiteBishop;
        case KING:
          return whiteKing;
        case ROOK:
          return whiteRook;
      }
      throw new RuntimeException("unknown piece type: " + type);
    }
  }
}
