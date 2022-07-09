const memoize = new Map()

function getNthFib(n) {
  if(n === 1) {
    return 0
  }

  if(n === 2) {
    return 1
  }

  if(memoize.has(n)) {
    return memoize.get(n)
  } else {
    memoize.set(n, getNthFib(n - 1) + getNthFib(n - 2))
    return memoize.get(n)
  }
}

console.log(getNthFib(100))

