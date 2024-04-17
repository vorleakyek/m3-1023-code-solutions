import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  let isPop = true;
  while(isPop) {
    const lastValue = stack.pop();
    if(lastValue !== undefined) {
      count++;
    } else {
      isPop = false;
    }
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  const array = [];
  let isPop = true;
  while (isPop) {
    const lastValue = stack.pop();

    if(lastValue!== undefined) {
          array.push(lastValue);
    } else {
      isPop = false;
    }
  }
  const max = Math.max(...array);
  return max;
}
