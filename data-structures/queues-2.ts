/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  return undefined;
}
