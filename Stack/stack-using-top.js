class StackUsingTop {
  constructor() {
    this._items = [];
    this._top = -1
  }

  push(element) {
    this._top++
    this._items[this._top] = element
  }

  pop() {
    if(this.isEmpty()) {
      return null
    }

    const element = this._items[this._top]
    this._top--
    this._items.length--
    return element
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }

    return this._items[this._top];
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
