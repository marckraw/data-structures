/*
*
* My Solution ;p
*
* */
const canSum = (targetSum, numbers, results = [], memo = {}) => {
  if(targetSum <= -1) return results.push(false)
  if(targetSum === 0) return results.push(true)

  for (let i = 0; i < numbers.length; i++) {
    const key = `${targetSum},${numbers[i]}`
    if(key in memo) continue;

    memo[key] = canSum(targetSum - numbers[i], numbers, results, memo)
  }

  return !!results.find(item => item === true)
}

const canSumBetter = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return true
  if(targetSum < 0) return false


  for (let num of numbers) {
    const remainder = targetSum - num
    if(canSum(remainder, numbers)) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(10, [8, 7, 4, 7]))
console.log(canSum(300, [7, 14]))

console.log(canSumBetter(7, [5, 3, 4, 7]))
console.log(canSumBetter(10, [8, 7, 4, 7]))
console.log(canSumBetter(300, [7, 14]))
