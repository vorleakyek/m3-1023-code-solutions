import { Stack } from './lib/stack';
import { get2ndFromTop, insertUnderTop } from './stacks-3';

describe('get2ndFromTop', () => {
  it('returns undefined when empty', () => {
    const stack = new Stack();
    expect(get2ndFromTop(stack)).toBeUndefined();
    expect(stack.print()).toEqual('Stack { <empty> }');
  });

  it('returns undefined when one value', () => {
    expect(get2ndFromTop(new Stack(36))).toBeUndefined();
    expect(get2ndFromTop(new Stack(null))).toBeUndefined();
    expect(get2ndFromTop(new Stack('foo'))).toBeUndefined();
  });

  it('restores stack to its original state when one value', () => {
    const stack1 = new Stack(36);
    expect(get2ndFromTop(stack1)).toBeUndefined();
    expect(stack1.print()).toEqual('Stack { 36 }');

    const stack2 = new Stack(null);
    expect(get2ndFromTop(stack2)).toBeUndefined();
    expect(stack2.print()).toEqual('Stack { null }');

    const stack3 = new Stack('foo');
    expect(get2ndFromTop(stack2)).toBeUndefined();
    expect(stack3.print()).toEqual('Stack { "foo" }');
  });

  it('returns the 2nd from the top value when more than one value', () => {
    const stack1 = new Stack(92, 13, 9);
    expect(get2ndFromTop(stack1)).toEqual(13);

    const stack2 = new Stack<boolean | number | null>(null, false, 0);
    expect(get2ndFromTop(stack2)).toBeFalsy();

    const stack3 = new Stack('foo', 'bar', 'baz');
    expect(get2ndFromTop(stack3)).toEqual('bar');
  });

  it('restores stack to its original state when more than one value', () => {
    const stack1 = new Stack(92, 13, 9);
    get2ndFromTop(stack1);
    expect(stack1.print()).toEqual('Stack { 92 <- 13 <- 9 }');

    const stack2 = new Stack<boolean | number | null>(null, false, 0);
    get2ndFromTop(stack2);
    expect(stack2.print()).toEqual('Stack { null <- false <- 0 }');

    const stack3 = new Stack('foo', 'bar', 'baz');
    get2ndFromTop(stack3);
    expect(stack3.print()).toEqual('Stack { "foo" <- "bar" <- "baz" }');
  });
});

describe('insertUnderTop', function () {
  it('does not modify stack when empty', () => {
    const stack = new Stack();
    expect(() => {
      insertUnderTop(stack, 12);
    }).not.toThrow();
    expect(stack.peek()).toBeUndefined();
  });

  it('inserts value underneath the top value', () => {
    const stack1 = new Stack(52);
    insertUnderTop(stack1, 78);
    insertUnderTop(stack1, 13);
    insertUnderTop(stack1, 94);
    expect(stack1.print()).toEqual('Stack { 78 <- 13 <- 94 <- 52 }');

    const stack2 = new Stack(null);
    insertUnderTop(stack2, 'o');
    expect(stack2.print()).toEqual('Stack { "o" <- null }');
  });
});
