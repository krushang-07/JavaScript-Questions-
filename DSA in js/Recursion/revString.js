//reverse string

//normal
// function rev(str) {
//   return str.split("").reverse().join("");
// }
// console.log(rev("hellow"));

//through recursion

function rev(str) {
  if (str === "") {
    return "";
  }
  return rev(str.substr(1)) + str.charAt(0);
}
console.log(rev("hellow"));

//rev(ellow) + h
//rev(llow) + e + h
//rev(low) + l + e + h
//rev(ow) + l + l + e + h
//rev(w) + o + 1 + 1 + e + h
//rev() + w + o + 1 + 1 + e + h
