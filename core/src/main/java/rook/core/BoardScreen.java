package rook.core;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.PointUtils;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Image;
import playn.core.Platform;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import react.RList;
import react.Slot;
import tripleplay.ui.Background;
import tripleplay.ui.Root;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Colors;
import tripleplay.util.Layers;

import java.util.ArrayList;
import java.util.List;

public class BoardScreen extends Screen {

  public final MainGame game;
  private final BoardState state;

  public BoardScreen(MainGame game, BoardState state) {
    super(game);
    this.game = game;
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
    interface Depths {
      float FIELDS = 0f;
      float PIECES = 1f;
    }

    private final BoardScreen screen;
    private final Platform plat;
    public final GroupLayer layer = new GroupLayer();
    private final List<Layer> fieldLayers;
    private final List<Layer> pieceLayers = new ArrayList<>();

    public Board(final BoardScreen screen, final BoardState state) {
      this.screen = screen;
      this.plat = screen.plat;
      layer.setName("board");
      layer.setSize(state.dim.width(), state.dim.height());
      layer.setOrigin(Layer.Origin.CENTER);
      layer.addAt(Layers.solid(0xff222222, state.dim.width(), state.dim.height()).setOrigin(Layer.Origin.CENTER).setDepth(-10), layer.width() / 2, layer.height() / 2);
      ImmutableList.Builder<Layer> fieldLayersBuilder = ImmutableList.builder();
      for (int y = 0; y < state.dim.height(); ++y) {
        for (int x = 0; x < state.dim.width(); ++x) {
          int color = (x + y) % 2 == 0 ? Colors.DARK_GRAY : Colors.GRAY;
          Layer fieldLayer = Layers.solid(color, 1f, 1f)
                  .setName("field_" + x + "_" + y)
                  .setOrigin(Layer.Origin.CENTER)
                  .setDepth(Depths.FIELDS);

          layer.addAt(fieldLayer, x + .5f, y + .5f);
          fieldLayersBuilder.add(fieldLayer);
        }
      }
      this.fieldLayers = fieldLayersBuilder.build();
      state.pieces.connectNotify(new RList.Listener<Piece>() {
        @Override
        public void onAdd(Piece piece) {
          final Layer pieceLayer = createPieceLayer(screen.game.images.pieceImage(piece.type));
          pieceLayers.add(pieceLayer);
          layer.add(pieceLayer);
          piece.pos.connectNotify(new Slot<Integer>() {
            @Override
            public void onEmit(Integer pos) {
              int x = PointUtils.toX(state.dim, pos);
              int y = PointUtils.toY(state.dim, pos);
              pieceLayer.setTranslation(x + .5f, y + .5f);
            }
          });
        }
      });
      layer.events().connect(new Pointer.Listener() {
        @Override
        public void onStart(Pointer.Interaction iact) {
          Preconditions.checkState(iact.hitLayer == layer);
          int pos = hitPos(iact);
          plat.log().debug("onStart", "iact", iact, "screen", new pythagoras.f.Point(iact), "local", iact.local, "pos", pos);
          if (pos < 0) return;
          Layer fieldLayer = fieldLayers.get(pos);
          screen.iface.anim.tweenAlpha(fieldLayer).from(.5f).to(1f).in(500);
        }

        private int hitPos(Pointer.Interaction iact) {
          int x = (int) iact.local.x;
          int y = (int) iact.local.y;
          return state.rect.contains(x, y) ? PointUtils.toIndex(state.dim, x, y) : -1;
        }
      });

      // layer.addAt(createPieceLayer(screen.game.images.whiteBishop), 1.5f, 1.5f);
    }

    private Layer createPieceLayer(Image image) {
      return new ImageLayer(image)
              .setSize(1f, 1f)
              .setOrigin(Layer.Origin.CENTER)
              .setDepth(Depths.PIECES);
    }
  }
}

