import { Queue } from './queue';

describe('enqueue(value)', () => {
  it('rejects an undefined `value` argument', () => {
    const queue = new Queue();
    expect(() => {
      queue.enqueue(undefined);
    }).toThrow('queue.enqueue(value) received undefined');
  });

  it('adds `value` to the end of `queue`', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(true);
    queue.enqueue(null);
    queue.enqueue({});
    queue.enqueue([]);
    queue.enqueue('data');
  });
});

describe('peek()', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    const value = queue.peek();
    expect(value).toEqual(undefined);
  });

  it("returns the first-in value, but doesn't remove it", () => {
    const queue = new Queue(1, 2, 3);
    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);
  });
});

describe('dequeue()', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    const value = queue.dequeue();
    expect(value).toEqual(undefined);
  });

  it('removes and returns the first-in value', () => {
    const queue = new Queue(1, 2, 3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
  });
});

describe('print()', () => {
  it('shows "Queue { <empty> }" when empty', () => {
    const queue = new Queue();
    expect(queue.print()).toEqual('Queue { <empty> }');
  });

  it('shows "Queue { value 1 <- value 2 <- ... <- value N }"', () => {
    const queue = new Queue('a', 'b', 'c');
    expect(queue.print()).toEqual('Queue { "a" <- "b" <- "c" }');
  });
});
