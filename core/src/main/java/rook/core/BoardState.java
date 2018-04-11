package rook.core;

import com.google.common.collect.Iterables;
import pythagoras.i.Dimension;
import pythagoras.i.IDimension;
import pythagoras.i.IRectangle;
import pythagoras.i.Rectangle;
import react.IntValue;
import react.RList;
import react.ValueView;

import java.util.BitSet;
import java.util.Optional;

public class BoardState {
  public final IDimension dim = new Dimension(8, 8);
  public final IRectangle rect = new Rectangle(dim);

  public final RList<Piece> pieces = RList.create();
  /**
   * The index of the currently selected piece in the [pieces] list.
   * Or -1 if nothing is selected.
   */
  public final IntValue selectedPieceIndex = new IntValue(-1);

  public final ValueView<Optional<Piece>> selectedPiece = selectedPieceIndex.map(pieceIndex -> {
    if (pieceIndex < 0) return Optional.empty();
    return Optional.of(pieces.get(pieceIndex));
  });

  public final ValueView<BitSet> possibleMoves = selectedPiece.map(optionalPiece -> {
    if (!optionalPiece.isPresent()) return new BitSet();
    Piece piece = optionalPiece.get();
    return PieceMoves.moves(dim, piece.type, piece.pos.get(), new BitSet());
  });

  public int pieceIndexAtPos(final int pos) {
    pieces.stream().filter(piece -> piece.pos.get() == pos).findFirst();
    return Iterables.indexOf(pieces, piece -> piece.pos.get() == pos);
  }

  public void clickOnPos(int pos) {
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
    BitSet moves = PieceMoves.moves(dim, piece.type, piece.pos.get(), new BitSet());
    if (moves.get(dest)) {
      piece.pos.update(dest);
      selectedPieceIndex.update(-1);
      return true;
    } else {
      return false;
    }
  }
}
