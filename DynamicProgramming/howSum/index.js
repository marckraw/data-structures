const howSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return []
  if(targetSum < 0) return null

  for (let num of numbers) { // targetSum = 4, num = 3
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo); // 4
    if(remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(10, [8, 7, 4, 7]))
console.log(howSum(300, [7, 14]))
console.log(howSum(0, [1, 2, 3]))
