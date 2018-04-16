package rook.core;

import java.util.BitSet;
import java.util.OptionalInt;
import java.util.Random;

interface BitSetUtils {

  static OptionalInt randomElement(Random random, BitSet bitSet) {
    int cardinality = bitSet.cardinality();
    if (cardinality == 0) return OptionalInt.empty();
    int n = random.nextInt(cardinality);
    return bitSet.stream().skip(n).findFirst();
  }
}
