/**
 * @param n The index of the Fibonacci number to compute.
 * @returns The nth Fibonacci number, or -1 for negative input.
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}