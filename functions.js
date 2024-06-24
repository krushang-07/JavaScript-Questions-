//function in js

// (1)function declaration

// function suquare(num) {
//   return num * num;
// }

// console.log(suquare(5));

//(2)function expression

// const square = function (num) {
//   //--->> this function called as a anonymous function(no name)
//   return num * num;
// };
// square(5);
// console.log(square(5));
// console.log(square(5));
// console.log(square(5));

//(3)first class function

// function square(num) {
//   return num * num;
// }
// function displayfunction(fn) {
//   console.log("square is:" + fn(5));
// }
// displayfunction(square);

//(4) What is IIFE?

// (function square(num) {
//   console.log(num * num);
// })(5);

//o/p

// (function (x) {
//   return (function (y) {
//     console.log(x);
//     console.log(y);
//   })(2);
// })(1);  //--> 1 2

//o/p

// for (let i = 0; i < 5; i++){
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }  // ---> 0 1 2 3 4  reason block scope

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// } // ---> 5 5 5 5 5  reason local scope

//hoisting

// functionName();
// function functionName() {
//     console.log("hyy")  //--->  hyy
// }

// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;   //---> undefined when a var in local scope than not check the var at global scope
// };

// fun();

//params vs arguments

// function square(num) {
//   //params when function declare
//   console.log(num * num);
// }

// square(5); //Arguments when function call

//o/p
//// const fun = (a,...numbers,x,y)  --> error rest parameters are last
// const fun = (a, x, y, ...numbers) => {
//   console.log(x, y); //--->6 7
// };
// fun(5, 6, 7, 8);


//callback function


