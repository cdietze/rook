package rook.core;

public interface MathUtils {
  static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
}
