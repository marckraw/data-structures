const gridTraveler = (m, n, memo = {}) => {
  if(m === 1 && n === 1) return 1
  if(m === 0 || n === 0) return 0
  if(`${n * m}` in memo) return memo[`${n * m}`]
  memo[`${n * m}`] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n -1, memo)
  return memo[`${n * m}`]
}

/*
*
* m = 3, n = 2    3 * 2 = 6
* m = 1, n = 6    return 1
* m = 2, n = 3    2 * 3 = 6
* m = 0, n = 12   return 0
*
* */



// console.log(gridTraveler(10, 10))
console.log(gridTraveler(18, 18))
// console.log(gridTraveler(4750, 4750))
