import { Queue } from './lib/queue';
import { addToBack, getFront, isEmpty, takeFront } from './queues-1';

describe('getFront', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(getFront(queue)).toBeUndefined();
  });

  it('returns the front value when not empty', () => {
    const queue1 = new Queue(13);
    expect(getFront(queue1)).toEqual(13);
    const queue2 = new Queue(13, 9);
    expect(getFront(queue2)).toEqual(13);
    const queue3 = new Queue(null, '');
    expect(getFront(queue3)).toBeNull();
  });

  it('does not modify queue', () => {
    const queue = new Queue('head', 'shoulders', 'arms', 'hands');
    getFront(queue);
    expect(queue.print()).toEqual(
      'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
    );
  });
});

describe('addToBack', () => {
  it('adds value to the back', () => {
    const queue = new Queue();
    addToBack(queue, 81);
    expect(queue.peek()).toEqual(81);
    addToBack(queue, 19);
    expect(queue.peek()).toEqual(81);
    addToBack(queue, 27);
    expect(queue.peek()).toEqual(81);
    expect(queue.print()).toEqual('Queue { 81 <- 19 <- 27 }');
  });
});

describe('takeFront', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(takeFront(queue)).toEqual(undefined);
  });

  it('returns the front value when not empty', () => {
    const queue1 = new Queue(13);
    expect(takeFront(queue1)).toEqual(13);
    const queue2 = new Queue(13, 9);
    expect(takeFront(queue2)).toEqual(13);
    const queue3 = new Queue(null, '');
    expect(takeFront(queue3)).toBeNull();
  });

  it('removes the front value', () => {
    const queue = new Queue('head', 'shoulders', 'arms', 'hands');
    takeFront(queue);
    expect(queue.print()).toEqual('Queue { "shoulders" <- "arms" <- "hands" }');
  });
});

describe('isEmpty', () => {
  it('returns true when empty', () => {
    const queue = new Queue();
    expect(isEmpty(queue)).toBeTruthy();
  });

  it('returns false when not empty', () => {
    const queue1 = new Queue(13);
    expect(isEmpty(queue1)).toBeFalsy();
    const queue2 = new Queue(9);
    expect(isEmpty(queue2)).toBeFalsy();
    const queue3 = new Queue('');
    expect(isEmpty(queue3)).toBeFalsy();
    const queue4 = new Queue(null);
    expect(isEmpty(queue4)).toBeFalsy();
  });

  it('does not modify queue', () => {
    const queue = new Queue('head', 'shoulders', 'arms', 'hands');
    isEmpty(queue);
    expect(queue.print()).toEqual(
      'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
    );
  });
});
