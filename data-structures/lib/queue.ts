export class Queue<T = unknown> {
  private data: Record<number, T> = {};
  private head = 0;
  private tail = -1;

  constructor(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this.enqueue(values[i]);
    }
  }

  enqueue(value: T): void {
    if (typeof value === 'undefined') {
      throw new TypeError('queue.enqueue(value) received undefined');
    }
    this.tail++;
    this.data[this.tail] = value;
  }

  peek(): T | undefined {
    if (this.tail < this.head) return;
    return this.data[this.head];
  }

  dequeue(): T | undefined {
    if (this.tail < this.head) return;
    const value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }

  print(): string {
    if (this.tail < this.head) return 'Queue { <empty> }';
    let output = 'Queue { ';
    for (let i = this.head; i < this.tail; i++) {
      output += JSON.stringify(this.data[i]) + ' <- ';
    }
    return output + JSON.stringify(this.data[this.tail]) + ' }';
  }
}
