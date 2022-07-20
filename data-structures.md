# Data Structures


## Arrays
```js
const array = [1, 2, 3, 4, 5, 6]
```

### Methods
```js
const arrayFilledWithStuff = new Array(10).fill(null)
console.log(arrayFilledWithStuff) [null, null, null, null, null, null, null, null, null, null]
  
array.push(7) // [1, 2, 3, 4, 5, 6, 7]
let poppedValue = array.pop() // [1, 2, 3, 4, 5, 6]
let poppedValue = array.pop() // [1, 2, 3, 4, 5]
let firstValueOfArray = array.shift() // [2, 3, 4, 5]
const slicedArray = array.slice(1, 3)  // start = 1, end = 3; [3, 4]

console.log(slicedArray) // [3, 4]
console.log(array) // [2, 3, 4, 5]
```

### Traversing
```js
for(let i = 0; i < array.length < i++) {
  console.log(array[i])
}

for (item in array) {
  console.log(item)
}

i = 0
while (i < array.length) {
  console.log(array[i])
  i++
}

j = array.length - 1
while (j >= 0) {
  console.log(array[j])
  j--
}
```


## Linked List

### Methods
