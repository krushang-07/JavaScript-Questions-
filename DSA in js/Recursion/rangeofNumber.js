//range of the number

function rangeNum(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeNum(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeNum(0, 5));


