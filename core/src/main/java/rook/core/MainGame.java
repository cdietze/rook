package rook.core;

import playn.core.Platform;
import playn.scene.Pointer;
import playn.scene.SceneGame;
import tripleplay.game.ScreenStack;
import tripleplay.game.trans.SlideTransition;

public class MainGame extends SceneGame {

  public final ScreenStack screens = new ScreenStack(this, rootLayer) {
    @Override
    protected Transition defaultPushTransition() {
      return new SlideTransition(this).left();
    }

    @Override
    protected Transition defaultPopTransition() {
      return new SlideTransition(this).right();
    }
  };

  public final ImageLoader.Images images;

  public MainGame(Platform plat) {
    super(plat, 33); // update our "simulation" 33ms (30 times per second)

    images = ImageLoader.loadImages(plat);

    // Register Pointer so we can handle any pointer input (clicks, mouse/touch events etc.)
    new Pointer(plat, rootLayer, true);

    BoardState boardState = new BoardState();
    boardState.pieces.add(new Piece(Piece.Type.BISHOP, 4));
    boardState.pieces.add(new Piece(Piece.Type.BISHOP, 5));
    boardState.pieces.add(new Piece(Piece.Type.KING, 9));
    boardState.pieces.add(new Piece(Piece.Type.ROOK, 13));
    screens.push(new BoardScreen(this, boardState));
  }
}
