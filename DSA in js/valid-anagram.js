//3 valid anagram or not

//rearranging the latter than same

//input: s = "anagram" t = "nagaram" ->>>>>>> output: true
//input: s = "rat" t = "cat" ->>>>>>> output: false

//1 solution
// const isAnagram = function (s, t) {
//   let S = s.split("").sort().join("");
//   let T = t.split("").sort().join("");
//   if ((S === T)) {
//       return true;
//   } else {
//       return false;
//   }
// };
// isAnagram("anagram", "nagaram");

//2 solution(optimal solution)

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1; //key value increase
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      //if same then same key value other then different characters
      return false;
    }
  }
  return true;
};
isAnagram("anagram", "nagaram");
