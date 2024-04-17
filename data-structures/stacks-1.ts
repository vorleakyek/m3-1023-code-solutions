/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  const result = stack.peek();
  return result;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  return stack.pop();
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  return stack.peek() === undefined ? true : false;
}
