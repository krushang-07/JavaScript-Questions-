//implicit and explicit binding

//"this" keyword

// this.a = 5; //global scope
// const get = () => {
//   console.log(this.a);
// };
// get(); //5

//normal function
// let user = {
//   name: "k",
//   age: 21,
//   childObj: {
//     newName: "krushang",
//     get() {
//       console.log(this.name, "and", this.newName); //undefined and krushang
//       console.log(this); //{ name: 'k', age: 21, get: [Function: get] }
//     },
//   },
// };
// user.childObj.get();

//arrow function

// let user = {
//   name: "k",
//   age: 21,
//   get: () => {
//     console.log(this.name); //undefined
//     console.log(this); //{}
//   },
// };
// user.get();

// //for working
// let user = {
//   name: "k",
//   age: 21,
//   get() {
//     const nestedArrow = () => {
//       console.log(this.name);
//     };
//     nestedArrow();
//   },
// };
// user.get(); //k

//---->>this keyword used in class and constructor

// class user {
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// const User = new user("k");
// console.log(User);
// User.getName(); //k

//o/p

// const user = {
//   firstName: "krushang",
//   getName() {
//     const firstName = "krushang!!!";
//     return this.firstName; //krushang
//     //return firstName; //krushang!!!
//   },
// };

// console.log(user.getName());

//o/p

// const name = "k";
// function makeUser() {
//   return {
//     name: "krushang",
//     ref: this,
//   };
// }
// let user = makeUser();
// console.log(user.ref.name); //undefined

//o/p

// const user = {
//   name: "K",
//   log() {
//     console.log(this.name);
//   },
// };
// user.log();
// setTimeout(user.log, 1000);
