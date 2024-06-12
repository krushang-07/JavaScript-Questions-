//palindrome number
// input: x = 121 ----->>>> output: true
// input: x = 10 ----->>>> output: false

const isPalindrome = function (x) {
  return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
};
const res = isPalindrome(121); //true
console.log(res);
