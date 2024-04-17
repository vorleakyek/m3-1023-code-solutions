import { Stack } from './stack';

describe('push(value)', () => {
  it('rejects an undefined `value` argument', () => {
    const stack = new Stack();
    expect(() => {
      stack.push(undefined);
    }).toThrow('stack.push(value) received undefined');
  });

  it('adds `value` to the top of `stack`', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(true);
    stack.push(null);
    stack.push({});
    stack.push([]);
    stack.push('data');
  });
});

describe('peek()', () => {
  it('returns undefined when empty', () => {
    const stack = new Stack();
    const value = stack.peek();
    expect(value).toEqual(undefined);
  });

  it("returns the last-in value, but doesn't remove it", () => {
    const stack = new Stack(1, 2, 3);
    expect(stack.peek()).toEqual(3);
    expect(stack.peek()).toEqual(3);
    expect(stack.peek()).toEqual(3);
  });
});

describe('pop()', () => {
  it('returns undefined when empty', () => {
    const stack = new Stack();
    const value = stack.pop();
    expect(value).toEqual(undefined);
  });

  it('removes and returns the last-in value', () => {
    const stack = new Stack(1, 2, 3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });
});

describe('print()', () => {
  it('shows "Stack { <empty> }" when empty', () => {
    const stack = new Stack();
    expect(stack.print()).toEqual('Stack { <empty> }');
  });

  it('shows "Stack { value 1 <- value 2 <- ... <- value N }"', () => {
    const stack = new Stack('a', 'b', 'c');
    expect(stack.print()).toEqual('Stack { "a" <- "b" <- "c" }');
  });
});
