/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1;
  let currentNode = list;

  while(currentNode.next !== null) {
    count++;
    currentNode = currentNode.next;
  }

  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  const newTail = new LinkedList<T>(value);

  let currentNode = list;
  console.log(currentNode)

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode!.next = newTail;
}

export function getTail<T>(list: LinkedList<T>): T | null {
  let currentNode = list;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  let currentNode: LinkedList<T> | null = list;

  // Check each node including the last one for the target value
  while (currentNode !== null) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }

  return false;
}
