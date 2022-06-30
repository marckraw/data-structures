// Use your hash table
import {HashTable} from "./hash-table.js";

const hashTable = new HashTable()


/*
*
* Separate Chaining collision mechanism
*
* */
// hashTable.put('jane', 123)
// hashTable.put('marcin', 456)
// hashTable.put('nicram', 678)
//
// console.log(hashTable.get('nicram'))
// console.log(hashTable.get('jane'))
// console.log(hashTable.get('marcin'))


/*
*
* Open Addressing collision mechanism
*
* */
hashTable.putOpenAddressing('jane', 123)
hashTable.putOpenAddressing('marcin', 456)
hashTable.putOpenAddressing('nicram', 678)

console.log(hashTable.getOpenAddressing('jane'))
console.log(hashTable.getOpenAddressing('marcin'))
console.log(hashTable.getOpenAddressing('nicram'))
