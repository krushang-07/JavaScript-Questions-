// second largest number

//1st solution
// function secondLargest(arr) {
//   const unqiueArr = Array.from(new Set(arr));  //O(n)
//   const sortArr = unqiueArr.sort((a, b) => b - a); //O(nlogn)
//   if (sortArr.length >= 2) {
//     return sortArr[1];
//   } else {
//     return -1;
//   }
// }

// console.log(secondLargest([12, 35, 1, 10, 34, 1]));  //O(nlogn)

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([12, 35, 1, 10, 34, 1]));  //O(n)
console.log(secondLargest([10,1,10]));

