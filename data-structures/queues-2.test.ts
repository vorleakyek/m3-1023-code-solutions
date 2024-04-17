import { Queue } from './lib/queue';
import { postpone, take2nd } from './queues-2';

describe('postpone', () => {
  it('does nothing when empty', () => {
    const queue = new Queue();
    expect(() => postpone(queue)).not.toThrow();
    expect(queue.peek()).toBeUndefined();
  });

  it('moves the front value to the back', () => {
    const queue1 = new Queue(13);
    postpone(queue1);
    expect(queue1.print()).toEqual('Queue { 13 }');
    const queue2 = new Queue(9, 53, 8);
    postpone(queue2);
    expect(queue2.print()).toEqual('Queue { 53 <- 8 <- 9 }');
    const queue3 = new Queue<unknown>(null, false, '', 0, 'wat');
    postpone(queue3);
    postpone(queue3);
    postpone(queue3);
    postpone(queue3);
    expect(queue3.print()).toEqual(
      'Queue { "wat" <- null <- false <- "" <- 0 }'
    );
  });
});

describe('take2nd', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(take2nd(queue)).toBeUndefined();
  });

  it('returns the value when one value', () => {
    const queue1 = new Queue(72);
    expect(take2nd(queue1)).toEqual(72);
    const queue2 = new Queue(null);
    expect(take2nd(queue2)).toBeNull();
  });

  it('returns the 2nd value when at least two values', () => {
    const queue1 = new Queue(48, 67);
    expect(take2nd(queue1)).toEqual(67);
    const queue2 = new Queue(26, 59, 35);
    expect(take2nd(queue2)).toEqual(59);
  });

  it('moves the front value to the back and removes the 2nd value', () => {
    const queue = new Queue<unknown>(false, '', null, 'hi');
    take2nd(queue);
    expect(queue.print()).toEqual('Queue { null <- "hi" <- false }');
  });
});
