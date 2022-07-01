// Test linked list
// import {LinkedList} from "./LinkedList.js";
//
// const linkedList = new LinkedList()


const node1 = {
  data: 0,
  next: null,
}

const node2 = {
  data: 100,
  next: null,
}

const node3 = {
  data: 2,
  next: null,
}


node1.next = node2
node2.next = node3


let currentNode = node1

// iterating over linked list
while (currentNode !== null) {
  console.log("Node value is: ", currentNode.data)
  currentNode = currentNode.next
}





