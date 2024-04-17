/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
    const movedQueue = queue.dequeue();
    if(movedQueue !== undefined) queue.enqueue(movedQueue!);
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  const movedQueue = queue.dequeue();
  if (movedQueue !== undefined) queue.enqueue(movedQueue!);
  const secondQueue = queue.dequeue();
  return secondQueue;
}
