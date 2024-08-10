// function twosum(array) {
//   let array1 = array.sort((a, b) => a - b);
//   console.log(array1);
//   for (let num of array1) {
//     for (let j = 1; j < array1.length; j++) {
//       if (num + array1[j] === 0) {
//         return [num, array1[j]];
//       }
//     }
//   }
// }
// console.log(twosum([-5, 4, 2, 0, -3, 3]));

function twoPairSum(array) {
  let arr = array.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoPairSum([-5, 4, 2, 0, -3, 3]));
