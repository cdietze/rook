package rook.core;

import java.util.BitSet;
import java.util.OptionalInt;
import java.util.Random;

interface BitSetUtils {

  static OptionalInt randomElement(Random random, BitSet bitSet) {
    int cardinality = bitSet.cardinality();
    if (cardinality == 0) return OptionalInt.empty();
    int n = random.nextInt(cardinality);
    int i = bitSet.nextSetBit(0);
    while (n-- > 0) {
      i = bitSet.nextSetBit(i + 1);
    }
    return OptionalInt.of(i);
  }
}
