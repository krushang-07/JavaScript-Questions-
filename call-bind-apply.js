//call bind apply

//1 what is call

// var obj = { name: "k" };
// const hyy = () => {
//   return "hello" + this.name; //this point window object
// };
// console.log(hyy());  //helloundefined

//call
// var obj = { name: "k" };
// function hyy() {
//   return "hello" + this.name; //this point window object
// }
// console.log(hyy.call(obj)); //hellok

//what is apply

// var obj = { name: "k" };
// function hyy(age) {
//   return "hello " + this.name + " is " + age; //this point window object
// }
// console.log(hyy.apply(obj, [24])); //argument in form of array not directly used in apply method

//what is bind

// var obj = { name: "k" };
// function hyy(age) {
//   return "hello " + this.name + " is " + age;
// }

// const bindfunc = hyy.bind(obj);
// console.log(bindfunc); //[Function: bound hyy]
// console.log(bindfunc(24)); //hello k is 24 ----> reusable function are used in bind

//(1)o/p
// const person = { name: "krushang" };
// function hi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(hi.call(person, 24)); //krushang is 24
// console.log(hi.bind(person, 24)); //[Function: bound hi]

//(2) o/p

// const age = 10;
// var person = {
//   name: "krushang",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };
// var person2 = { age: 24 };
// console.log(person.getAge.call(person2));   //24

//(3) o/p this is not pointing to the function(settimeout) that point to global scope

//(4)
// const animals = [
//   {
//     species: "loin",
//     name: "king",
//   },
//   {
//     species: "whale",
//     name: "queen",
//   },
// ];

// function animal(i) {
//   this.print = function () {
//     console.log(i + " " + this.species + " " + this.name);
//   };
//   this.print();
// }
// for (let i = 0; i < animals.length; i++) {
//   animal.call(animals[i], i); //0 loin king
//   // 1 whale queen
// }

//(5) append an array to another array

// const array = ["a", "b"];
// const element = [0, 1, 2];

//(1)
// const concatArray = array.concat(element);
// console.log(concatArray); //[ 'a', 'b', 0, 1, 2 ]

//(2)
// array.push.apply(array, element);
// console.log(array); //[ 'a', 'b', 0, 1, 2 ]

//(6) using apply to inhance built in function

//---> find min max number in an array
const number = [5, 6, 7, 10, 1];
// console.log(Math.max(number));  //NaN

//(1)
// (max = +Infinity), (min = -Infinity);
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   }
//   if (number[i] < min) {
//     min = number[i];
//   }
// }
// console.log(max, min);

//(2)
// console.log(Math.max.apply(null, number)); //10
// console.log(Math.min.apply(null, number)); //1

//(3)
// function f() {
//   console.log(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g(); //pointing to the window object

//(4)
// function f() {
//   console.log(this.name);
// }
// f = f
//   .bind({
//     name: "krushang",
//   })
//   .bind({ name: "ann" }); //krushang-bind chaining not working

// f();


