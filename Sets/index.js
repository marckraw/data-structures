// Lets use our set here

import {SetUsingObject} from "./set.js";

const simpleSet = new SetUsingObject()
simpleSet.add(1)
simpleSet.add(2)
simpleSet.add(3)
simpleSet.add(4)

console.log(simpleSet.size())

console.log(simpleSet.member(2))

simpleSet.remove(2)

console.log(simpleSet.size())

console.log(simpleSet.member(2))

console.log(simpleSet.toString())
