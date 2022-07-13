const fib = (n, memo = {}) => {
  if(n in memo) return memo[n]
  else {
    if (n <= 1) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n];
  }
}


const foo = (n) => {
  if (n <= 1) return;
  foo(n - 1);
}

const bar = (n) => {
  if (n <= 1) return;
  bar(n - 2);
}

const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
}


