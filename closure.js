// Closure in javascript

// Lexical Scope

// var name = "Krushang Savaliya";

// //global scope
// function local() {
//   //local scope

//   console.log(name);
// }
// local();

// //2
// //global scope
// const sub = () => {
//   var name = "krushang";
//   //inner scope 2
//   const displayname = () => {
//     //displayname() ===>> closure- use to inner function local scope access the outside of the variable
//     //inner scope
//     console.log(name);
//   };
//   displayname();
// };
// sub();

// 3
// function makeFunc() {
//   var name = "Roadside Coder";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc(); //roadside coder

// 4
// closure scope chain

// var username = "krushang";
// function func() {
//   var name = "savaliya";
//   function func2() {
//     console.log(username, name); //parents- parent , parent (chaining)
//   }
//   func2();
// }
// func(); //----> krushang savaliya

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// interview question

// o/p(1)

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;   //shadowing
//     console.log(count);   //1
//   }
//   console.log(count);     //0
// })();  //IIFE

// o/p(2)

// 1st method
// function createBase(num) {
//   return function add(n) {
//     return num + n;
//   };
// }

// var addsix = createBase(6);

// console.log(addsix(10));
// console.log(addsix(20));

// my solution method
// function createBase(num) {
//   function add(nums) {
//     return num + nums;
//   }
//   return add;
// }
// var addsix = createBase(6);
// console.log(addsix(10));
// console.log(addsix(20));

// (3) time optimization question

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

// (4) o/p

// using var 0 1 2
// for (var i = 0; i < 3; i++) {
//   function a(i) {
//     setTimeout(function b() {
//       console.log(i);
//     }, 1000);
//   }
//   a(i);
// }


