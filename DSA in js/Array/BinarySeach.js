function Bs(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(Bs([2, 6, 8, 10, 12], 6));
