export class SetUsingObject {
  constructor() {
    this._set = {}
    this._size = 0
  }

  add(value) {
    if(!this._set[value]) {
      this._set[value] = true
      this._size++
    }
  }

  remove(value) {
    if(this._set[value]) {
      // this._set[value] = false
      delete this._set[value] // this is pretty expensive operation
      this._size--
    }
  }

  member(value) {
    return !!this._set[value]
  }

  size() {
    return this._size
  }

  toString() {
    return this._set
  }
}
