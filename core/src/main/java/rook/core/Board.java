package rook.core;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.PointUtils;
import playn.core.Image;
import playn.core.Platform;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import react.RList;
import react.RSet;
import react.Slot;
import tripleplay.util.Colors;
import tripleplay.util.Layers;

import java.util.ArrayList;
import java.util.List;

public class Board {
  interface Depths {
    float SQUARES = 0f;
    float PIECES = 1f;
  }

  private final BoardScreen screen;
  private final Platform plat;
  private final GameState state;
  public final GroupLayer layer = new GroupLayer();
  private final List<Layer> squareLayers;
  private final List<Layer> pieceLayers = new ArrayList<>();

  public Board(final BoardScreen screen) {
    this.screen = screen;
    this.plat = screen.plat;
    this.state = screen.state;
    layer.setName("board");
    layer.setSize(state.dim.width(), state.dim.height());
    layer.setOrigin(Layer.Origin.CENTER);
    layer.addAt(Layers.solid(0xff222222, state.dim.width(), state.dim.height()).setOrigin(Layer.Origin.CENTER).setDepth(-10), layer.width() / 2, layer.height() / 2);
    this.squareLayers = createSquareLayers();
    initPieceLayersListener();
    initHighlightSelectedPieceListener();
    initMakeUnrevealedSquaresInvisibleListener();
    initInputListener();
  }

  private ImmutableList<Layer> createSquareLayers() {
    ImmutableList.Builder<Layer> squareLayersBuilder = ImmutableList.builder();
    for (int y = 0; y < state.dim.height(); ++y) {
      for (int x = 0; x < state.dim.width(); ++x) {
        int color = (x + y) % 2 == 0 ? Colors.DARK_GRAY : Colors.GRAY;
        Layer squareLayer = Layers.solid(color, 1f, 1f)
                .setName("square_" + x + "_" + y)
                .setOrigin(Layer.Origin.CENTER)
                .setDepth(Depths.SQUARES)
                .setVisible(false);

        layer.addAt(squareLayer, x + .5f, y + .5f);
        squareLayersBuilder.add(squareLayer);
      }
    }
    return squareLayersBuilder.build();
  }

  private void initPieceLayersListener() {
    state.pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        final Layer pieceLayer = createPieceLayer(screen.game.images.pieceImage(piece.side, piece.type));
        pieceLayers.add(pieceLayer);
        layer.add(pieceLayer);
        piece.pos.connectNotify(new Slot<Integer>() {
          @Override
          public void onEmit(Integer pos) {
            int x = PointUtils.toX(state.dim, pos);
            int y = PointUtils.toY(state.dim, pos);
            pieceLayer.setTranslation(x + .5f, y + .5f);
            pieceLayer.setVisible(piece.side == Piece.Side.PLAYER || state.revealedSquares.contains(pos));
          }
        });
      }
    });
  }

  private void initHighlightSelectedPieceListener() {
    state.selectedPieceIndex.connectNotify((value, oldValue) -> {
      if (oldValue != null && oldValue >= 0) pieceLayers.get(oldValue).setTint(Colors.WHITE);
      if (value >= 0) pieceLayers.get(value).setTint(Colors.YELLOW);
    });
  }

  private void initMakeUnrevealedSquaresInvisibleListener() {
    state.revealedSquares.connectNotify(new RSet.Listener<Integer>() {
      @Override
      public void onAdd(Integer pos) {
        Layer squareLayer = squareLayers.get(pos);
        squareLayer.setVisible(true);
      }
    });
  }

  private void initInputListener() {
    layer.events().connect(new Pointer.Listener() {
      @Override
      public void onStart(Pointer.Interaction iact) {
        Preconditions.checkState(iact.hitLayer == layer);
        int pos = hitPos(iact);
        plat.log().debug("onStart", "iact", iact, "screen", new pythagoras.f.Point(iact), "local", iact.local, "pos", pos);
        if (pos < 0) return;
        Layer squareLayer = squareLayers.get(pos);
        screen.iface.anim.tweenAlpha(squareLayer).from(.5f).to(1f).in(500);
        state.clickOnSquare(pos);
      }

      private int hitPos(Pointer.Interaction iact) {
        int x = (int) iact.local.x;
        int y = (int) iact.local.y;
        return state.rect.contains(x, y) ? PointUtils.toIndex(state.dim, x, y) : -1;
      }
    });
  }

  private Layer createPieceLayer(Image image) {
    return new ImageLayer(image)
            .setSize(1f, 1f)
            .setOrigin(Layer.Origin.CENTER)
            .setDepth(Depths.PIECES);
  }
}
