//subset of the arr
function subsetrec(nums) {
  let result = [];
  let temp = [];

  function subset(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    subset(nums, i + 1);
    temp.pop();
    subset(nums, i + 1);
  }
  subset(nums, 0);
  return result;
}

console.log(subsetrec([1, 2, 3]));
