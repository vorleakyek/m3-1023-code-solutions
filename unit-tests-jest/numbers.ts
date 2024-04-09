/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  const result = amount.toFixed(2);
  return `$${result}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] / divisor);
  }
  return newArr;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'number') {
      result[key] = Number(value) * multiplier;
    } else {
      result[key] = value;
    }
  });
  return result;
}
