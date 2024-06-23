//palindrome number

function palindrome(n) {
  n1 = +n.toString().split("").reverse().join("");
  if (n1 !== n) {
    return false;
  }
  return true;
}
console.log(palindrome(121));
