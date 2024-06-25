//Curring in js

//example f(a,b) into f(a)(b)

//normal function

// function f(a, b) {
//   console.log(a, b);
// }

//currying function

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }
// console.log(f(5)(6));

//----------------------------------------------------------------

//(1) question sum(2)(6)(1)

//my self
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1));

//(2) according to the parameter the operation perform

//my solution

// function evaluate(value) {
//   if (value === "Sum") {
//     return function (a) {
//       return function (b) {
//         return a + b;
//       };
//     };
//   } else if (value === "multiply") {
//     return function (a) {
//       return function (b) {
//         return a * b;
//       };
//     };
//   } else if (value === "divide") {
//     return function (a) {
//       return function (b) {
//         return a / b;
//       };
//     };
//   } else if (value === "sub") {
//     return function (a) {
//       return function (b) {
//         return a - b;
//       };
//     };
//   } else {
//     return function (a) {
//       return function (b) {
//         return "invalid operation";
//       };
//     };
//   }
// }

// console.log(evaluate("Sum")(4)(2));
// console.log(evaluate("multiply")(10)(2));
// console.log(evaluate("divide")(10)(2));
// console.log(evaluate("sub")(6)(2));
// console.log(evaluate("sul")(6)(2));

//(3) Infinite currying

//(4)currying vs partial application

//partial application  argument != return return function
// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// //1st way
// const x = sum(10);
// console.log(x(5, 6)); //21

// //2nd way
// console.log(sum(10)(5, 6)); //21

// //by currying   --> 3 argument = 3 return function
// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// console.log(mul(10)(10)(10));


