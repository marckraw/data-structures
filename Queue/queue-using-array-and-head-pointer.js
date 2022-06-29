export class QueueUsingArrayAndHeadPointer {
  constructor() {
    this._head = 0;
    this._data = [];
  }

  enqueue(value) {
    this._data.push(value);
  }

  dequeue() {
    if(this.isEmpty() || this._head >= this._data.length) {
      return null
    }

    const element = this._data[this._head]
    this._head++

    return element
  }

  peek() {
    if(this.isEmpty() || this._head >= this._data.length) {
      return null
    }

    return this._data[this._head]
  }

  size() {
    return this._data.length
  }

  isEmpty() {
    return this._data.length === 0
  }
}
