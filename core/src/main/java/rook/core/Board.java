package rook.core;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.PointUtils;
import playn.core.Image;
import playn.core.Platform;
import playn.core.Surface;
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

import static de.cdietze.playn_util.PointUtils.toX;
import static de.cdietze.playn_util.PointUtils.toY;

public class Board {
  interface Depths {
    float SQUARES = 0f;
    float PIECES = 1f;
    float INTENTIONS = 2f;
  }

  private final BoardScreen screen;
  private final Platform plat;
  private final GameState state;
  public final GroupLayer rootLayer = new GroupLayer();
  private final List<Layer> squareLayers;
  private final List<Layer> pieceLayers = new ArrayList<>();

  public Board(final BoardScreen screen) {
    this.screen = screen;
    this.plat = screen.plat;
    this.state = screen.state;
    rootLayer.setName("board");
    rootLayer.setSize(state.dim.width(), state.dim.height());
    rootLayer.setOrigin(Layer.Origin.CENTER);
    rootLayer.addAt(Layers.solid(0xff222222, state.dim.width(), state.dim.height()).setOrigin(Layer.Origin.CENTER).setDepth(-10), rootLayer.width() / 2, rootLayer.height() / 2);
    this.squareLayers = createSquareLayers();
    initPieceLayersListener();
    initIntentionLayersListener();
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

        rootLayer.addAt(squareLayer, x + .5f, y + .5f);
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
        rootLayer.add(pieceLayer);
        piece.pos.connectNotify(new Slot<Integer>() {
          @Override
          public void onEmit(Integer pos) {
            int x = toX(state.dim, pos);
            int y = toY(state.dim, pos);
            pieceLayer.setTranslation(x + .5f, y + .5f);
            pieceLayer.setVisible(piece.side == Piece.Side.PLAYER || state.revealedSquares.contains(pos));
          }
        });
      }
    });
  }

  private void initIntentionLayersListener() {
    List<Layer> intentionLayers = new ArrayList<>();
    state.moveIntentions.connectNotify(new RList.Listener<MoveIntention>() {
      float width = state.dim.width();
      float height = state.dim.height();
      @Override
      public void onAdd(MoveIntention intention) {
        int posX = toX(state.dim, intention.piece.pos.get());
        int posY = toY(state.dim, intention.piece.pos.get());
        // TODO update gfx when intention.dest changes
        int dest = intention.dest.get();
        int destX = toX(state.dim, dest);
        int destY = toY(state.dim, dest);
        // TODO: hide intention on unrevealed squares. Maybe add "fog of war" squares on top.
        Layer intentionLayer = new Layer() {
          @Override
          public float width() { return width; }
          @Override
          public float height() { return height; }
          @Override
          protected void paintImpl(Surface surf) {
            surf.setFillColor(Colors.darker(Colors.RED))
                    .drawLine(posX + .5f, posY + .5f, destX + .5f, destY + .5f, 0.1f);
          }
        }.setDepth(Depths.INTENTIONS);
        intentionLayers.add(intentionLayer);
        rootLayer.add(intentionLayer);
      }
      @Override
      public void onRemove(int index, MoveIntention intention) {
        intentionLayers.remove(index).close();
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
    rootLayer.events().connect(new Pointer.Listener() {
      @Override
      public void onStart(Pointer.Interaction iact) {
        Preconditions.checkState(iact.hitLayer == rootLayer);
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
