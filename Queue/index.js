import {QueueUsingArrayAndHeadPointer} from "./queue-using-array-and-head-pointer.js";

// Lets use our queue here

const simpleQueue = new QueueUsingArrayAndHeadPointer()

simpleQueue.enqueue(1)
simpleQueue.enqueue(2)
simpleQueue.enqueue(-5)

let peekedValue = simpleQueue.peek()
console.log("peekedValue: ", peekedValue)

console.log("Dequed value: ", simpleQueue.dequeue())
console.log(simpleQueue.dequeue())
console.log(simpleQueue.dequeue())
console.log(simpleQueue.dequeue())
console.log(simpleQueue.dequeue())


console.log("peekedValue: ", simpleQueue.peek())

// __________________________________________________________
console.log("\n###############################################\n")
import {QueueUsingArray} from "./queue-using-array.js";

const arrayQueue = new QueueUsingArray()

arrayQueue.enqueue(1)
arrayQueue.enqueue(2)
arrayQueue.enqueue(-5)

peekedValue = arrayQueue.peek()
console.log("peekedValue: ", peekedValue)

console.log("Dequed value: ", arrayQueue.dequeue())
console.log(arrayQueue.dequeue())
console.log(arrayQueue.dequeue())
console.log(arrayQueue.dequeue())
console.log(arrayQueue.dequeue())


console.log("peekedValue: ", arrayQueue.peek())
