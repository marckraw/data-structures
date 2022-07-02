export class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export class BST {
  constructor() {
    this._root = null;
  }

  insert(data) {
    const node = new Node(data)

    if(this._root === null) {
      this._root = node
      return;
    }

    let currentNode = this._root

    while (currentNode) {
      if(node.data > currentNode.data) {
        if(currentNode.right === null) {
          currentNode.right = node
          return;
        }
        currentNode = currentNode.right
      } else if (node.data < currentNode.data) {
        if(currentNode.left === null) {
          currentNode.left = node
          return;
        }
        currentNode = currentNode.left
      } else {
        return;
      }
    }
  }
}
