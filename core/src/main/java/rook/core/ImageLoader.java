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

    public final Image blackBishop = plat.assets().getImage("images/cburnett/bB.png");
    public final Image blackKing = plat.assets().getImage("images/cburnett/bK.png");
    public final Image blackRook = plat.assets().getImage("images/cburnett/bR.png");

    public final Image pieceImage(Piece.Side side, Piece.Type type) {
      switch (side) {
        case PLAYER:
          switch (type) {
            case BISHOP:
              return whiteBishop;
            case KING:
              return whiteKing;
            case ROOK:
              return whiteRook;
          }
          break;
        case ENEMY:
          switch (type) {
            case BISHOP:
              return blackBishop;
            case KING:
              return blackKing;
            case ROOK:
              return blackRook;
          }
      }
      throw new RuntimeException("No image found for piece, side: " + side + ", type: " + type);
    }
  }
}
