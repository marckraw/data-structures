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

  search(data) {
    let currentNode = this._root

    while(currentNode) {
      if(currentNode.data === data) {
        return true
      }

      if(data > currentNode.data) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }

    return false
  }

  preOrderTraverseToArray() {
    const output = []

    const preOrderTraverse = (currentNode) => {
      if(currentNode === null) {
        return
      }

      output.push(currentNode.data)

      preOrderTraverse(currentNode.left)

      preOrderTraverse(currentNode.right)

    }

    preOrderTraverse(this._root)

    return output
  }

  inOrderTraverseToArray() {
    const output = []

    const inOrderTraverse = (currentNode) => {
      if(currentNode === null) {
        return
      }

      inOrderTraverse(currentNode.left)

      output.push(currentNode.data)

      inOrderTraverse(currentNode.right)

    }

    inOrderTraverse(this._root)

    return output
  }

  postOrderTraverseToArray() {
    const output = []

    const postOrderTraverse = (currentNode) => {
      if(currentNode === null) {
        return
      }

      postOrderTraverse(currentNode.left)

      postOrderTraverse(currentNode.right)

      output.push(currentNode.data)

    }

    postOrderTraverse(this._root)

    return output
  }
}
