//Fibonacci Sequence - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,...

const fib = (n: number) => {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

for (let i = 0; i < 15; i++) {
  console.log(fib(i));
}
