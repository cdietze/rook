package rook.core;

import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import tripleplay.ui.Background;
import tripleplay.ui.Root;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Colors;

public class BoardScreen extends Screen {

  public final MainGame game;
  public final GameState state;

  public BoardScreen(MainGame game, GameState state) {
    super(game);
    this.game = game;
    this.state = state;
  }

  @Override
  public void wasAdded() {
    super.wasAdded();
    Root root = iface.createRoot(new BorderLayout(), UiUtils.newSheet(plat.graphics()), layer);
    root.setSize(plat.graphics().viewSize);
    Board board = new Board(this);
    float margin = 10f;
    ScaledElement scaledElement = new ScaledElement(board.rootLayer);
    scaledElement.addStyles(Style.BACKGROUND.is(Background.solid(Colors.BLACK).inset(margin)));
    root.add(scaledElement.setConstraint(BorderLayout.CENTER));
  }
}
