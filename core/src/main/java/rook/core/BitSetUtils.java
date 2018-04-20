package rook.core;

import java.util.BitSet;
import java.util.OptionalInt;
import java.util.Random;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * There is no Bitset.stream() in GWT backend, so we roll our own utility functions.
 */
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

  static void forEach(BitSet bitSet, Consumer<Integer> f) {
    for (int i = bitSet.nextSetBit(0); i >= 0; i = bitSet.nextSetBit(i + 1)) {
      f.accept(i);
    }
  }

  static OptionalInt findFirst(BitSet bitSet, Predicate<Integer> p) {
    for (int i = bitSet.nextSetBit(0); i >= 0; i = bitSet.nextSetBit(i + 1)) {
      if (p.test(i)) return OptionalInt.of(i);
    }
    return OptionalInt.empty();
  }
}
