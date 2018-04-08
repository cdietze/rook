package rook.android;

import playn.android.GameActivity;

import rook.core.MainGame;

public class MainActivity extends GameActivity {

  @Override public void main () {
    new MainGame(platform());
  }
}
