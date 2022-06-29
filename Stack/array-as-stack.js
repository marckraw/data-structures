class ArrayAsStack {
  constructor() {
    this._items = [];
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    if(this.isEmpty()) {
      return null
    }

    return this._items.pop();
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }

    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }

  print() {
    console.log(this._items.toString());
  }
}
