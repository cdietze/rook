package rook.core;

import playn.core.Platform;
import playn.scene.Pointer;
import playn.scene.SceneGame;
import tripleplay.game.ScreenStack;
import tripleplay.game.trans.SlideTransition;

import java.util.Random;

import static rook.core.Piece.Side.ENEMY;
import static rook.core.Piece.Side.PLAYER;
import static rook.core.Piece.Type.*;

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

    GameState gameState = setupState1();
//    GameState gameState = setupState2();
    screens.push(new BoardScreen(this, gameState));
  }

  private GameState setupState1() {
    GameState gameState = new GameState(new Random(), plat.log(), false);
    gameState.pieces.add(new Piece(PLAYER, KING, 0));
    gameState.pieces.add(new Piece(PLAYER, BISHOP, 1));
    gameState.pieces.add(new Piece(PLAYER, BISHOP, 2));
    gameState.pieces.add(new Piece(PLAYER, BISHOP, 10));
    gameState.pieces.add(new Piece(PLAYER, ROOK, 3));

    gameState.pieces.add(new Piece(ENEMY, ROOK, 4));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 12));
    return gameState;
  }

  private GameState setupState2() {
    GameState gameState = new GameState(new Random(), plat.log(), false);
    gameState.pieces.add(new Piece(PLAYER, KING, 0));
    gameState.pieces.add(new Piece(PLAYER, BISHOP, 1));
    gameState.pieces.add(new Piece(PLAYER, BISHOP, 9));
    gameState.pieces.add(new Piece(PLAYER, ROOK, 8));

    gameState.pieces.add(new Piece(ENEMY, BISHOP, 7));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 15));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 23));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 31));
    gameState.pieces.add(new Piece(ENEMY, ROOK, 39));
    gameState.pieces.add(new Piece(ENEMY, ROOK, 47));

    gameState.pieces.add(new Piece(ENEMY, BISHOP, 56));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 57));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 58));
    gameState.pieces.add(new Piece(ENEMY, BISHOP, 59));
    gameState.pieces.add(new Piece(ENEMY, ROOK, 60));
    gameState.pieces.add(new Piece(ENEMY, ROOK, 61));
    return gameState;
  }
}
