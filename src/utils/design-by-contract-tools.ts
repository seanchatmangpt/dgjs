export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

export function isDefined<T>(
  value: T | undefined | null,
  message: string
): asserts value is T {
  assert(value !== undefined && value !== null, message);
}
