//Object in JS

// const user = {
//   name: "krushang",
//   age: 21,
// };

// user.name = "k"; //modified
// delete user.age; //delete
// console.log(user); //access

//question

//1
// const func = (function (a) {
//   delete a; //delete keyword used for the delete the property of an object not local variable
//   return a;
// })(5);
// console.log(func); //5

//2
// const user = {
//   name: "krushang",
//   age: 21,
//   "i like js": true, //key
// };
// console.log(user["i like js"]); //here to access the key value

//3
// const user = {
//   name: "krushang",
//   age: 21,
//   "i like js": true,
// };
// for (key in user) {
//   console.log(key); //access key
//   console.log(user[key]); //access value
// }

// //4
// //forIn vs forOf
// a = [1, 2, 3, 4];
// for (i in a) {
//   console.log(i); //index- 0 1 2 3
// }
// for (val of a) {
//   console.log(val); //value- 1 2 3 4
// }

//5 o/p

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(obj); //{ a: 'three', b: 'two' }

//6 o/p

// let obj = {
//   a: 200,
//   b: 100,
//   title: "my nums",
// };
// multiplyNumeric(obj);
// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(obj);

//7 o/p

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;           //{ 'a[object Object]': 123}
// a[c] = 456;              //{ 'a[object Object]': 456 }
// // console.log(a[b]);
// console.log(a); //{ '[object Object]': 456 }

//8 json.strigify and json.parse

// const user = {
//   name: "k",
//   age: 21,
// };
// const strObj = JSON.stringify(user);
// console.log(strObj); //{"name":"k","age":21}   ==> obj -> strobj   ->store the localstorage as a strobj

// console.log(JSON.parse(strObj)); //{ name: 'k', age: 21 }    ==> strobj -> obj

//9 o/p
// console.log([..."Lydia"]); //[ 'L', 'y', 'd', 'i', 'a' ]
// console.log([..."krushang savaliya"])
// // [
// //     'k', 'r', 'u', 's', 'h',
// //     'a', 'n', 'g', ' ', 's',
// //     'a', 'v', 'a', 'l', 'i',
// //     'y', 'a'
// //   ]

//10 o/p

// const user = { name: "krushang", age: 21 };
// const admin = { admin: true, ...user };
// const admin2 = { admin2: false, ...admin };
// console.log(admin); //{ admin: true, name: 'krushang', age: 21 }
// console.log(admin2); //{ admin2: false, admin: true, name: 'krushang', age: 21 }

//11 o/p

// const settings = {
//   username: "k",
//   level: 20,
//   health: 100,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); //{"level":20,"health":100}

//12  o/p

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },

//   parimeter() {
//     return 2 * Math.PI * this.radius;
//   },
// };
// console.log(shape.diameter());
// console.log(shape.parimeter()); //in normal function working and arrow function are not working
// //note: normal function refrence to a object
// // arrow function reference to a window obj

//13 what is destructuring in objects!!

// let user = {
//   name: "k",
//   age: 24,
// };

// //destructuring
// const { name } = user;
// console.log(name); //k

//14 o/p

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// }
// console.log(getItems(["banana", "apple"], "pear", "orange"));

//15 o/p

// let c = { greeting: "heyy" };
// let d;
// d = c;
// console.log(d); //{ greeting: 'heyy' }
// c.greeting = "hello";
// console.log(d.greeting); //hello
// console.log(d); //{ greeting: 'hello' }

//16 o/p

// console.log({ a: 1 } == { a: 1 }); //false   //different memory
// console.log({ a: 1 } === { a: 1 }); //false

// console.log([1, 2] == [1, 2]); //false
// console.log([1, 2] === [1, 2]); //false

//17 o/p

// let person = { name: "k" };
// const members = [person];
// person = null;

// console.log(members); //[ { name: 'k' } ]
// console.log(person); //null

//18 o/p
const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply(); //20
// multiply(); //20
// multiply(value); //20  //modified the value to 10 to 20
// multiply(value); //40

//19 shallow copy and deep copy

// let user = {
//   name: "k",
//   age: 21,
// };

// const objClone = Object.assign({}, user);
// objClone.name = "krushang";
// console.log(user, objClone); //{ name: 'k', age: 21 } { name: 'krushang', age: 21 }
