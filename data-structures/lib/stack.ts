export class Stack<T = unknown> {
  private data: Record<number, T> = {};
  private index = 0;

  constructor(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this.push(values[i]);
    }
  }

  push(value: T): void {
    if (typeof value === 'undefined') {
      throw new TypeError('stack.push(value) received undefined');
    }
    this.data[this.index] = value;
    this.index++;
  }

  pop() {
    const last = this.index - 1;
    if (last < 0) return;
    const value = this.data[last];
    delete this.data[last];
    this.index = last;
    return value;
  }

  peek() {
    const last = this.index - 1;
    if (last < 0) return;
    return this.data[last];
  }

  print() {
    if (this.index === 0) {
      return 'Stack { <empty> }';
    }
    let output = ' }';
    let last = this.index - 1;
    for (; last > 0; last--) {
      output = ' <- ' + JSON.stringify(this.data[last]) + output;
    }
    output = JSON.stringify(this.data[last]) + output;
    return 'Stack { ' + output;
  }
}
