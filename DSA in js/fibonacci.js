//2 fibonacci number
// series -> 0,1,1,2,3,5,8,13,21,34,55,89....

//Input: n = 3 ------>>>> output: 2
//f(0) = 0, f(1) = 1

//solution 1

var fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
fib(3);

//solution 2  recursion

// var fib = function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// };
