import { Stack } from './lib/stack';
import { addToTop, getTop, isEmpty, takeTop } from './stacks-1';

describe('getTop', () => {
  it('returns undefined when empty', () => {
    const stack = new Stack();
    expect(getTop(stack)).toBeUndefined();
  });

  it('returns the top value when not empty', () => {
    const stack = new Stack();
    stack.push(13);
    expect(getTop(stack)).toEqual(13);
    stack.push(9);
    expect(getTop(stack)).toEqual(9);
    stack.push('');
    expect(getTop(stack)).toEqual('');
    stack.push(null);
    expect(getTop(stack)).toBeNull();
  });

  it('does not modify stack', () => {
    const stack = new Stack('head', 'shoulders', 'knees', 'toes');
    getTop(stack);
    expect(stack.print()).toEqual(
      'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
    );
  });
});

describe('addToTop', () => {
  it('adds value to the top of stack', () => {
    const stack = new Stack();
    addToTop(stack, 81);
    expect(stack.print()).toEqual('Stack { 81 }');
    addToTop(stack, 19);
    expect(stack.print()).toEqual('Stack { 81 <- 19 }');
    addToTop(stack, 27);
    expect(stack.print()).toEqual('Stack { 81 <- 19 <- 27 }');
  });
});

describe('takeTop', () => {
  it('returns undefined when empty', () => {
    const stack = new Stack();
    expect(takeTop(stack)).toEqual(undefined);
  });

  it('returns the top value not empty', () => {
    const stack = new Stack();
    stack.push(13);
    expect(takeTop(stack)).toEqual(13);
    stack.push(9);
    expect(takeTop(stack)).toEqual(9);
    stack.push('');
    expect(takeTop(stack)).toEqual('');
    stack.push(null);
    expect(takeTop(stack)).toBeNull();
  });

  it('removes the top value', () => {
    const stack = new Stack('head', 'shoulders', 'knees', 'toes');
    takeTop(stack);
    expect(stack.print()).toEqual('Stack { "head" <- "shoulders" <- "knees" }');
  });
});

describe('isEmpty', function () {
  it('returns true when contains no values', () => {
    const stack = new Stack();
    expect(isEmpty(stack)).toBeTruthy();
  });

  it('returns false when contains one or more values', () => {
    const stack = new Stack();
    stack.push(13);
    expect(isEmpty(stack)).toBeFalsy();
    stack.push(9);
    expect(isEmpty(stack)).toBeFalsy();
    stack.push('');
    expect(isEmpty(stack)).toBeFalsy();
    stack.push(null);
    expect(isEmpty(stack)).toBeFalsy();
  });

  it('does not modify stack', () => {
    const stack = new Stack('head', 'shoulders', 'knees', 'toes');
    isEmpty(stack);
    expect(stack.print()).toEqual(
      'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
    );
  });
});
