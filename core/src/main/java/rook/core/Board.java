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
import react.Value;
import tripleplay.util.Colors;
import tripleplay.util.Layers;

import java.util.*;

import static de.cdietze.playn_util.PointUtils.*;

public class Board {
  interface Depths {
    float SQUARES = 0f;
    float PIECES = 1f;
    float INTENTIONS = 2f;
    float FOG_OF_WAR = 3f;
  }

  private final BoardScreen screen;
  private final Platform plat;
  private final GameState state;
  public final GroupLayer rootLayer = new GroupLayer();
  private final List<Layer> squareLayers;
  /**
   * Maps pieceId -> pieceLayer
   */
  private final Map<Integer, Layer> pieceLayers = new HashMap<>();

  private final Value<Integer> selectedPieceId = Value.create(-1);

  public Board(final BoardScreen screen) {
    this.screen = screen;
    this.plat = screen.plat;
    this.state = screen.state;
    rootLayer.setName("board");
    rootLayer.setSize(state.dim.width(), state.dim.height());
    rootLayer.setOrigin(Layer.Origin.CENTER);
    rootLayer.addAt(Layers.solid(0xff222222, state.dim.width(), state.dim.height()).setOrigin(Layer.Origin.CENTER).setDepth(-10), rootLayer.width() / 2, rootLayer.height() / 2);
    this.squareLayers = createSquareLayers();
    initAddPieceListener();
    initMovePieceListener();
    initIntentionLayersListener();
    initHighlightSelectedPieceListener();
    initFogOfWar();
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
                .setDepth(Depths.SQUARES);

        rootLayer.addAt(squareLayer, x + .5f, y + .5f);
        squareLayersBuilder.add(squareLayer);
      }
    }
    return squareLayersBuilder.build();
  }

  private void initAddPieceListener() {
    state.pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        int x = toX(state.dim, piece.pos);
        int y = toY(state.dim, piece.pos);
        final Layer pieceLayer = createPieceLayer(screen.game.images.pieceImage(piece.side, piece.type))
                .setTranslation(x + .5f, y + .5f);
        pieceLayers.put(piece.id, pieceLayer);
        rootLayer.add(pieceLayer);
      }
    });
  }

  private void initMovePieceListener() {
    // TODO: use more pretty animations
    // TODO: queue animations up: animate events one after another
    state.pieceMoved.connect(e -> {
      plat.log().debug("Handling PieceMovedEvent", "event", e);
      // Handle capture
      e.capture.ifPresent(piece -> {
        Layer l = pieceLayers.remove(piece.id);
        screen.iface.anim.tweenAlpha(l).to(0f).then().dispose(l);
        screen.iface.anim.tweenScale(l).to(3f);
      });
      // Handle pushes
      e.pushedEvents.forEach(push -> {
        if (!contains(state.dim, push.piece.pos)) {
          pieceLayers.remove(push.piece.id).close();
        } else {
          int x = toX(state.dim, push.piece.pos);
          int y = toY(state.dim, push.piece.pos);
          screen.iface.anim.tweenTranslation(
                  pieceLayers.get(push.piece.id)).to(x + .5f, y + .5f).in(200).easeInOut();
        }
      });
      // Handle move
      int x = toX(state.dim, e.piece.pos);
      int y = toY(state.dim, e.piece.pos);
      screen.iface.anim.tweenTranslation(pieceLayers.get(e.piece.id)).to(x + .5f, y + .5f).in(200).easeInOut();
    });
  }

  private void initIntentionLayersListener() {
    List<Layer> intentionLayers = new ArrayList<>();
    state.moveIntentions.connectNotify(new RList.Listener<MoveIntention>() {
      float width = state.dim.width();
      float height = state.dim.height();
      @Override
      public void onAdd(MoveIntention intention) {
        Piece piece = state.pieceById(intention.pieceId);
        int posX = toX(state.dim, piece.pos);
        int posY = toY(state.dim, piece.pos);
        // TODO update gfx when intention.dest changes
        int dest = intention.calcDest(state).get();
        int destX = toX(state.dim, dest);
        int destY = toY(state.dim, dest);
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
    selectedPieceId.connectNotify((pieceId, oldPieceId) -> {
      if (oldPieceId != null && oldPieceId >= 0) {
        Optional.ofNullable(pieceLayers.get(oldPieceId)).ifPresent(l -> l.setTint(Colors.WHITE));
      }
      if (pieceId >= 0) {
        Optional.ofNullable(pieceLayers.get(pieceId)).ifPresent(l -> l.setTint(Colors.YELLOW));
      }
    });
  }

  private void initFogOfWar() {
    List<Layer> fogLayers = new ArrayList<>();
    state.fogSquares.connectNotify(new RSet.Listener<Integer>() {
      @Override
      public void onAdd(Integer pos) {
        int x = toX(state.dim, pos);
        int y = toY(state.dim, pos);
        Layer layer = Layers.solid(Colors.BLACK, 1f, 1f)
                .setName("fog_" + x + "_" + y)
                .setOrigin(Layer.Origin.CENTER)
                .setDepth(Depths.FOG_OF_WAR);
        rootLayer.addAt(layer, x + .5f, y + .5f);
        while (fogLayers.size() <= pos) {
          fogLayers.add(null);
        }
        fogLayers.set(pos, layer);
      }
      @Override
      public void onRemove(Integer pos) {
        fogLayers.get(pos).close();
        fogLayers.set(pos, null);
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
        clickOnSquare(pos);
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

  private void clickOnSquare(int pos) {
    int clickedPieceIndex = state.pieceIndexByPos(pos);
    if (selectedPieceId.get() >= 0) {
      Piece piece = state.pieceById(selectedPieceId.get());
      if (piece.pos == pos) {
        // Clicked on already selected piece -> deselect
        selectedPieceId.update(-1);
      } else {
        // Clicked on destination, try to move
        if (state.tryMoveSelectedPiece(piece, pos)) {
          selectedPieceId.update(-1);
        }
      }
    } else {
      if (clickedPieceIndex >= 0) {
        // Select piece
        selectedPieceId.update(state.pieces.get(clickedPieceIndex).id);
      } else {
        // Clicked on no piece while no piece is selected -> ignore
      }
    }
  }
}
