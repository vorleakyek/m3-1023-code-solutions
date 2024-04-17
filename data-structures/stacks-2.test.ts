import { Stack } from './lib/stack';
import { countValues, maxValue } from './stacks-2';

describe('countValues', () => {
  it('returns the number of values', () => {
    expect(countValues(new Stack())).toEqual(0);
    expect(countValues(new Stack(92, 13, 9))).toEqual(3);
    expect(countValues(new Stack<unknown>(null, false, 0, NaN, ''))).toEqual(5);
  });
});

describe('maxValue', () => {
  it('returns -Infinity when empty', () => {
    const stack = new Stack<number>();
    expect(maxValue(stack)).toEqual(-Infinity);
  });

  it('returns the maximum value when not empty', () => {
    const stack1 = new Stack(45, 26, 34, 85, 25, 40, 37, 0);
    expect(maxValue(stack1)).toEqual(85);

    const stack2 = new Stack(-847626, -9234752, -7444);
    expect(maxValue(stack2)).toEqual(-7444);

    const stack3 = new Stack(-Infinity, 18, 123, -5);
    expect(maxValue(stack3)).toEqual(123);

    const stack4 = new Stack(1235);
    expect(maxValue(stack4)).toEqual(1235);
  });
});
