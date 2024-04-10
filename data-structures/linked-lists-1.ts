/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getHead<T>(list: LinkedList<T>): T | null {

  if(!list.data){
    return null
  } else {
   return list.data;
  }
}

export function updateHead<T>(list: LinkedList<T>, value: T | null): void {}

export function withoutHead<T>(list: LinkedList<T>): LinkedList<T> | null {
  return null;
}

export function prepend<T>(list: LinkedList<T>, value: T): LinkedList<T> {
  return list;
}
