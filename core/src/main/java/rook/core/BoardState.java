package rook.core;

import com.google.common.collect.Iterables;
import de.cdietze.playn_util.PointUtils;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.*;

import java.util.BitSet;
import java.util.Optional;

public class BoardState {
  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();

  public final RSet<Integer> revealedSquares = RSet.create();

  public final Signal<Piece> pieceMoved = Signal.create();
  /**
   * The index of the currently selected piece in the [pieces] list.
   * Or -1 if nothing is selected.
   */
  public final IntValue selectedPieceIndex = new IntValue(-1);

  public final ValueView<Optional<Piece>> selectedPiece = selectedPieceIndex.map(pieceIndex -> {
    if (pieceIndex < 0) return Optional.empty();
    return Optional.of(pieces.get(pieceIndex));
  });

  public BoardState() {
    pieces.connectNotify(new RList.Listener<Piece>() {
      @Override
      public void onAdd(Piece piece) {
        revealBorderingSquares(piece.pos.get());
      }
    });
    pieceMoved.connect(piece -> revealBorderingSquares(piece.pos.get()));
  }

  public BitSet passableSquares(BitSet result) {
    revealedSquares.forEach(result::set);
    pieces.forEach(p -> result.set(p.pos.get(), false));
    return result;
  }

  public int pieceIndexAtPos(final int pos) {
    pieces.stream().filter(piece -> piece.pos.get() == pos).findFirst();
    return Iterables.indexOf(pieces, piece -> piece.pos.get() == pos);
  }

  public void clickOnSquare(int pos) {
    int clickedPieceIndex = pieceIndexAtPos(pos);
    int selectedPieceIndexValue = selectedPieceIndex.get();
    if (clickedPieceIndex == selectedPieceIndexValue) {
      selectedPieceIndex.update(-1);
    } else if (clickedPieceIndex >= 0) {
      selectedPieceIndex.update(clickedPieceIndex);
    } else if (selectedPieceIndexValue >= 0) {
      tryMoveSelectedPiece(pos);
    } else {
      selectedPieceIndex.update(-1);
    }
  }

  public boolean tryMoveSelectedPiece(int dest) {
    Optional<Piece> optionalPiece = selectedPiece.get();
    if (!optionalPiece.isPresent()) return false;
    Piece piece = optionalPiece.get();
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), passableSquares(new BitSet()), new BitSet());
    if (moves.get(dest)) {
      piece.pos.update(dest);
      selectedPieceIndex.update(-1);
      pieceMoved.emit(piece);
      return true;
    } else {
      return false;
    }
  }

  private void revealBorderingSquares(int pos) {
    revealedSquares.add(pos);
    BitSet set = PointUtils.borderingNeighbors(dim, pos, new BitSet());
    for (int i = set.nextSetBit(0); i >= 0; i = set.nextSetBit(i + 1)) {
      revealedSquares.add(i);
    }
  }
}
