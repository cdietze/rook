package rook.core;

import com.google.common.base.MoreObjects;
import com.google.errorprone.annotations.Immutable;

import java.util.BitSet;
import java.util.Optional;

@Immutable
public class MoveIntention {

  public final int pieceId;
  public final Direction dir;
  public final int moveLength;

  public MoveIntention(int pieceId, Direction dir, int moveLength) {
    this.pieceId = pieceId;
    this.dir = dir;
    this.moveLength = moveLength;
  }

  public Optional<Integer> calcDest(GameState state) {
    BitSet opponent = new BitSet();
    state.playerPieces().forEach(p -> opponent.set(p.pos));
    int pieceIndex = state.pieceIndexById(pieceId);
    if (pieceIndex < 0) return Optional.empty();
    Piece piece = state.pieces.get(pieceIndex);
    int result = PieceMoves.slideInDir(state.dim, piece.pos, dir, state.blockedSquaresForEnemy.get(), opponent, moveLength);
    // System.out.println("MoveIntention#calcDest, result:" + result + ", this:" + this);
    return Optional.ofNullable(result);
  }

  @Override
  public String toString() {
    //noinspection ConstantConditions
    return MoreObjects.toStringHelper(this)
            .add("pieceId", pieceId)
            .add("dir", dir)
            .add("moveLength", moveLength)
            .toString();
  }
}
