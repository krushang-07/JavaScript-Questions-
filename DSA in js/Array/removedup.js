//26. Remove Duplicates from Sorted Array

//Input: nums = [1,1,2] Output: 2, nums = [1,2,_]
//Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// function Duplicate(nums) {
//     if (nums.length === 0) {
//         return 0;
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === nums[i + 1]) {
//                 nums.splice(i + 1, 1);
//                 i--;
//             }
//         }
//     }

//   return nums.length;
// }
// console.log(Duplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));   // o(n) //o(1)

function dupwithout(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }
}
console.log(dupwithout([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //o(n)  //o(1)
