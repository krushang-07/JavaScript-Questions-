//rotate array

// Input: nums = [1,2,3,4,5,6,7], k = 3    Output: [5, 6, 7, 1, 2, 3, 4]
//Input: nums = [-1,-100,3,99], k = 2      Output: [3, 99, -1, -100]

function rotateArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const roteted = nums.splice(size - k, size); // [5,6,7]   //o(n)
  nums.unshift(...roteted); // add top of the array and spread       //o(n)
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));         //o(n)
