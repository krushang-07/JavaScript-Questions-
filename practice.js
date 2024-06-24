//map
// const nums = [1, 2, 3, 4, 5];
// const newnums = nums.map((e) => e * 3);

// console.log(newnums);

//filter
// const nums = [1, 2, 3, 4, 5];
// const morethantwo = nums.filter((num) => {
//   return num > 2;
// });
// console.log(morethantwo);

//reduce
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// },0);
// console.log(sum);

//Polyfill for map()

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i]));
//   }
//   return temp;
// };

//e = this[i]

// const nums = [1, 2, 3, 4, 5];
// const newnums = nums.myMap((e) => e * 3);

// console.log(newnums);

//Polyfill for filter
//Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4, 5];
// const morethantwo = nums.myFilter((num) => {
//   return num > 2;
// });
// console.log(morethantwo);

//Polyfill for the reduce

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//map vs forEach

// const arr = [1, 2, 3, 4, 5];

// const mapResult = arr.map((ar) => {
//   return ar * 2;
// });

// const forEachResult = arr.forEach((ar, i) => {
//   return (arr[i] = ar * 3);
// });

// console.log(mapResult, forEachResult, arr); //----->[2,4,6,8,10] , undefined , [3,6,9,12,15]

// console.log(arr);

//forEach-change the array value in new array / they does not return array / method cycle not possible
//map=change the array value in same array    / they return array          / method cycle possible

//practice question
let students = [
  { name: "krushang", rollnum: 31, marks: 80 },
  { name: "jenish", rollnum: 15, marks: 69 },
  { name: "yash", rollnum: 16, marks: 35 },
  { name: "harryyy", rollnum: 7, marks: 55 },
];

//marks more than 60 print those name
// const name = students.filter((e) => e.marks > 60).map((e) => e.name);
// console.log(name);

//student who score more then 60 they can add marks 20 and print total marks
// const marks = students
//   .filter((stu) => stu.marks > 60)
//   .map((stu) => stu.marks + 20)
//   .reduce((prev, next) => prev + next);
// console.log(marks);

//>60  --> 69,80 ==> +20 ---> 89,100 ---> add ==> 189

var totalmarks = students.map((stu) =>
  stu.marks < 60 ? (stu.marks += 20) : stu.marks
);

console.log(totalmarks);

var totalmarks2 = totalmarks.filter((stu) => stu.marks > 60);

console.log(totalmarks2);
