package rook.core;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import de.cdietze.playn_util.PointUtils;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Platform;
import playn.scene.GroupLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import tripleplay.ui.Background;
import tripleplay.ui.Field;
import tripleplay.ui.Root;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Colors;
import tripleplay.util.Layers;

import java.util.List;

public class BoardScreen extends Screen {

  private final BoardState state;

  public BoardScreen(MainGame game, BoardState state) {
    super(game);
    this.state = state;
  }

  @Override
  public void wasAdded() {
    super.wasAdded();
    Root root = iface.createRoot(new BorderLayout(), UiUtils.newSheet(plat.graphics()), layer);
    root.setSize(plat.graphics().viewSize);
    Board board = new Board(this, state);
    float margin = 10f;
    ScaledElement scaledElement = new ScaledElement(board.layer);
    scaledElement.addStyles(Style.BACKGROUND.is(Background.solid(Colors.BLACK).inset(margin)));
    root.add(scaledElement.setConstraint(BorderLayout.CENTER));
  }

  public static class Board {
    public final GroupLayer layer = new GroupLayer();
    private final List<Layer> fieldLayers;
    private final Platform plat;

    public Board(final BoardScreen boardScreen, final BoardState state) {
      this.plat = boardScreen.plat;
      layer.setName("board");
      layer.setSize(state.dim.width(), state.dim.height());
      layer.setOrigin(Layer.Origin.CENTER);
      layer.addAt(Layers.solid(0xff222222, state.dim.width(), state.dim.height()).setOrigin(Layer.Origin.CENTER).setDepth(-10), layer.width() / 2, layer.height() / 2);
      ImmutableList.Builder<Layer> fieldLayersBuilder = ImmutableList.builder();
      ImmutableMap.Builder<Layer, Field> layerToFieldMapBuilder = ImmutableMap.builder();
      for (int y = 0; y < state.dim.height(); ++y) {
        for (int x = 0; x < state.dim.width(); ++x) {
          int color = (x + y) % 2 == 0 ? Colors.DARK_GRAY : Colors.GRAY;
          Layer fieldLayer = Layers.solid(color, 1f, 1f).setOrigin(Layer.Origin.CENTER).setName("field_" + x + "_" + y);
          layer.addAt(fieldLayer, x + .5f, y + .5f);
          fieldLayersBuilder.add(fieldLayer);
        }
      }
      this.fieldLayers = fieldLayersBuilder.build();
      layer.events().connect(new Pointer.Listener() {
        @Override
        public void onStart(Pointer.Interaction iact) {
          Preconditions.checkState(iact.hitLayer == layer);
          int pos = hitPos(iact);
          plat.log().debug("onStart", "iact", iact, "screen", new pythagoras.f.Point(iact), "local", iact.local, "pos", pos);
          if (pos < 0) return;
          Layer fieldLayer = fieldLayers.get(pos);
          boardScreen.iface.anim.tweenAlpha(fieldLayer).from(.5f).to(1f).in(500);
        }

        private int hitPos(Pointer.Interaction iact) {
          int x = (int) iact.local.x;
          int y = (int) iact.local.y;
          return state.rect.contains(x, y) ? PointUtils.toIndex(state.dim, x, y) : -1;
        }
      });
    }
  }
}

