//reverse the order of the word

//input: " hello world" ---> output: "world hello"

//normal way
// function rev(str) {
//   return str.split(" ").reverse().join(" ").trim();
// }
// // console.log(rev("   hello world   "));
// console.log(rev("a good    example"));

//using stack

const rev = function (s) {
  const splits = s.split(" ");
  const stack = [];
  for (let i of splits) {
    stack.push(i);
  }
  let final = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      final += " " + current;
    }
  }
  return final.trim();
};
console.log(rev("   hello world   "));
console.log(rev("a good    example"));
