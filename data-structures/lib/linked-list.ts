/* eslint-disable @typescript-eslint/no-this-alias */
export class LinkedList<T = unknown> {
  private _data: T | null = null;
  private _next: LinkedList<T> | null = null;

  constructor(...values: T[]) {
    this.data = values[0];

    for (let i = 1, node: LinkedList<T> = this; i < values.length; i++) {
      node = node.next = new LinkedList(values[i]);
    }
  }

  get data(): T | null {
    return this._data;
  }

  set data(value: T | null) {
    if (typeof value === 'undefined') {
      throw new TypeError(
        'the `data` value of a LinkedList cannot be undefined'
      );
    }
    this._data = value;
  }

  get next(): LinkedList<T> | null {
    return this._next;
  }

  set next(node: LinkedList<T> | null) {
    if (!(node instanceof LinkedList) && node !== null) {
      throw new TypeError(
        'the `next` node in a linked list must be a LinkedList object'
      );
    }
    this._next = node;
  }

  print() {
    let output = 'LinkedList { ' + JSON.stringify(this.data);
    let node: LinkedList<T> = this;
    while (node.next) {
      output += ' <- ' + JSON.stringify(node.next.data);
      node = node.next;
    }
    return output + ' }';
  }
}
