// Test Binary Trees
import {BST} from "./bst.js";

const data = [50, 40, 70, 60, 20, 99, 45]
const bst = new BST()

data.forEach(item => {
  bst.insert(item)
})


const result = bst.preOrderTraverseToArray()
const resultInOrder = bst.inOrderTraverseToArray()
const resultPostOrder = bst.postOrderTraverseToArray()

console.log(result)
console.log(resultInOrder)
console.log(resultPostOrder)

