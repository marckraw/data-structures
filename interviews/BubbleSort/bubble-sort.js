export function bubbleSort(array) {
  for(let j = 0; j < array.length; j++) {
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i+1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }
  }

  return array
}

export function improvedBubbleSort(array) {
  let swapped = false

  for(let j = 0; j < array.length; j++) {
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i+1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp

        swapped = true
      }

      if(swapped === false) {
        return array
      }
    }
  }

  return array
}
