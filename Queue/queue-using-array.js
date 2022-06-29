export class QueueUsingArray {
  constructor() {
    this._data = [];
  }

  enqueue(value) {
    this._data.push(value);
  }

  dequeue() {
    if(this.isEmpty()) {
      return null
    }

    const element = this._data.shift()

    return element
  }

  peek() {
    if(this.isEmpty() || this._head >= this._data.length) {
      return null
    }

    return this._data[0]
  }

  size() {
    return this._data.length
  }

  isEmpty() {
    return this._data.length === 0
  }
}
