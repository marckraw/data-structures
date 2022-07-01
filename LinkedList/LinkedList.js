export class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this._head = null
    this._tail = null;
    this._length = 0;
  }



  push(data) {
    const node = new Node(data)

    if(this._head === null) {
      this._head = node
    } else {
      let currentNode = this._head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }
    this._length++
  }
}
