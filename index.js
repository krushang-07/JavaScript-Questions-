//1
// const name = "anil";
// console.log(name()); //error

//2
// const result = false || {} || null;
// console.log(result);  // {}-positive value count

//3
// const result = null || false || '';
// console.log(result);  // no positive value then last one ans-''

//4
// const result = [] || 0 || true;
// console.log(result)   // []

//5
// console.log(Promise.resolve(5));   //promise {fulfiled:5}

//6
// let name = "k";
// function getName() {
//     console.log(name);
//     let name = "null";
// }
// getName();   //error = (let)cant access before init

//7
// let name = "k";
// function getName() {
//   console.log(name);
// }
// getName();   //k   let scope is block lvl cuz no any let in function

//8
// console.log(`${(x => x)(`i love`)} to program`);   // template literal

//9
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// console.log(sumValues([...1, 2, 3])); //error
// console.log(sumValues([...[1, 2, 3]])); //1,2,3 undefined
// console.log(sumValues(...[1, 2, 3])); //6
// console.log(sumValues([1, 2, 3])); //1,2,3 undefined

//10
// const name = "krushang";
// console.log(typeof name);  //string
// console.log(!typeof name);  //false
// console.log(!typeof name === "object");  //false
// console.log(!typeof name === "string");  //false
// console.log(!typeof name === false);     //true

//11
// const name = "sub";
// const age = 21;

// console.log(isNaN(name));  //T
// console.log(isNaN(age));   //F

//12
// let person = { name: "krushang" }
// console.log(person);
// person.name = "h";
// console.log(person);
// console.log(Object.seal(person))
// person.name = "k";
// console.log(person)

//13
// let data = [2, 9, 0, 10];

// //remove first element
// data.shift();
// console.log(data);   //[9,0,10]

// let data2 = [10, 20, 30, 40];
// //remove last element
// data2.pop();
// console.log(data2);  //[10,20,30]

//14
//check number is even or odd
// let a = 6;
// if (a % 2 === 0) {
//     console.log("number is even")
// }
// else {
//     console.log("number is odd")
// }

//15
// let data = {
//   name: "krushang",
//   age: "20",
// };
// delete data.name;
// console.log(data); //{age:'20}

//20
// let data = "true";

// //convert data to boolean false value

// console.log(!data);   //false
// console.log(typeof (!data));  //boolean
// console.log(data);   //string true

//21

// let data = "true";

// //convert data to boolean true value

// console.log(!data);   //false
// console.log(!!data);  //true

//22
// let data = ["kru", "ti", "ji"]
// delete data[1];
// console.log(data);  //["kru",<1 empty item>, "ji"]

//23
// let data = ["kru", "ti", "ji"]
// delete data[1];
// console.log(data.length);  //3

//24
// // merge two array
// let a = [1, 2, 3]
// let b = [10, 20, 30]
// let merge = [...a, ...b]
// console.log(merge)  //[1,2,3,10,20,30]

//25
// let a = [1, 2, 3, 10];
// let b = [10, 20, 30];
// let merge = [...a, ...b];
// console.log(merge); //[1,2,3,10,10,20,30] = same allow

//26

// let c = 3 ** 3;
// console.log(c);   //27

//27
// let a = 2;
// setTimeout(() => {
//     console.log(a)   //100
// }, 0)
// a = 100;  //hoisting theory last push settimeout

//28
// let a = 2;
// let A = 30;
// console.log(A);  //30

//30
// let A10 = "like";
// let 10A = "okay";  //error = SyntaxError: Invalid or unexpected token
// console.log(A10);

//31
// let a = "like";
// let b = `like`;
// console.log(a === b);  //T

//32
// let a = 1;
// let c = 2;
// console.warn(--c === a);  //true (--2 = 1 === 1)

//33
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); //1 === 1(true) true === 1(false)  ans=false
// console.log(a === --c);       //true

//34
// console.log(3 * 3);                 //9
// console.log(3 ** 3);                //27
//console.log(3 *** 3);             //error - SyntaxError: Invalid or unexpected token *
//console.log(3 **** 3);            //error - SyntaxError: Invalid or unexpected token **

//35
// console.log(a);    //undefined- declare done value nahi ayii
// var a = 10;

//36
// console.log(b)   //not defined - declare hi nahi kiyaa

//37
// console.log([[[[]]]]);  //nested array

//38
// //find os name
// // navigator.platform()

//39
// let for = 100; //error - for is reserved keyword

//40
// function fruit() {
//     console.log(name); //undefined
//     console.log(price); //access before init

//     var name = "k";  //concept of hoisting rule
//     let price = "200";
// }
// fruit();

//41
// for (var i = 0; i < 3; i++){
//     setTimeout(() => {
//         console.log(i)            //3 3 3
//     }, 1);                        //global scope - var
// }

//42
// for (let i = 0; i < 3; i++){
//     setTimeout(() => {
//         console.log(i)            // 0 1 2
//     }, 1);                        //local (block) scope - var
// }

//43
// console.log(+true);   //1   value of true=0 0+1=1
// console.log(typeof +true);  //number

//44
// console.log(!"krushang");            //false
// console.log(!10);                    //false
// console.log(typeof ("krushang"));    //string

//45
// let data = "size";
// const bird = {
//     size: "small",
// };
// console.log(bird[data]);   //small
// console.log(bird["size"]);  //small
// console.log(bird.size);    //small
// console.log(bird.data);     //undefined

//46
// let c = { name: "peter" };
// let d;
// d = c;
// c.name = "krushang";
// console.log(d.name);  //krushang

//47
// var x;
// console.log(x);   //undefined
// var x = 10;
// console.log(x);  //10

//48
// var x;
// let x = 10;  //error - x is already declared

//49
// let a = 3;
// let b = new Number(3);   //constructor
// console.log(typeof(a))  //number
// console.log(typeof(b))  //object
// console.log(a == b);    //true
// console.log(a === b);   //false (data type not a same)

//50
// let name;
// nmae = {};  //typo not any throw error
// console.log(name);  //undefined

//51
// function fruit() {
//     console.log("wooo");
// }
// fruit.name = "apple";
// fruit();   //wooo not change function value

//52
// function sum(a, b) {
//     return a + b;

// }
// console.log(sum(1, "2"));   //12

//53
// let num = 0;
// console.log(num++);    //0
// console.log(++num);    //2
// console.log(num);      //2

//54
// function getAge(...args) {
//     console.log(typeof args);   //object
// }
// getAge();

//55
// function getAge() {
//     'use strict';  // remove then log 21
//     age = 21;
//     console.log(age);  // ReferenceError: age is not defined
// }
// getAge();

//56
// const sum = eval('10*10+5');  //js function eval() string to expression to opreation
// console.log(sum);   //105

//57
// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1"));  //true
// console.log(obj.hasOwnProperty(1));  //true

//58
// const obj = { a: "1", b: "2", a: "3" };
// console.log(obj);    //ans = {a:"3",b:"2"}

//59
// for (let i = 1; i < 5; i++){
//     if (i === 3) continue;
//     console.log(i);       //1 2 4  (skip 3)
// }

//60
// const foo = () => {
//     console.log("first");
// }
// const bar = () => setTimeout(()=>
//     console.log("second"));

// const baz = () => {
//     console.log("third");
// }
// foo();    //output = first third second concept of hoisting last mai settimeout prority
// bar();
// baz();

//61
// const person = { name: "krushang" };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21)); //krushang is 21
// console.log(sayHi.bind(person, 21)); //return function
// console.log(sayHi.bind(person, 21)()); //krushang is 21

//62
// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());  //number

//63
// function sayHi() {
//     return () => 0;
// }
// console.log(typeof sayHi());  //function

//64
// console.log(typeof typeof 1)  //string

//65
// const number = [1, 2, 3];
// number[6] = 11;
// console.log(number);    //[ 1, 2, 3, <3 empty items>, 11 ]

//66
// const num = [1, 2, 3];
// num[9] = num;
// console.log(num);   //infinite nested array

//67
//console.log(!null); //!null = true
// console.log(!"");
// console.log(!!""); // !"" = true !true = false
// console.log(!1);
// console.log(!!1); // !1 = false !false = true

//68
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));

//69
//console.log([..."krushang"]);

// [
//     'k', 'r', 'u',
//     's', 'h', 'a',
//     'n', 'g'
//   ]

//70
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "1");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "2");
// });

// Promise.race([firstPromise.secondPromise]).then((res) => console.log(res));   //2 first resolve 2

//71
// let person = { name: "krushang" };
// const members = [person];
// person = null;
// console.log(members);  // [ { name: 'krushang' } ]-reason object to newarr memory location new than not change

//72
// const person = {
//     name: "krushang",
//     age: 21,
// };
// for (const item in person) {
//     console.log(item);   //name age = keys value log
// }

//73
// let data = 3 + 4 + '5';
// console.log(typeof data);  //String
// console.log(data);    //75

//74
// console.log(typeof 3 + 4 + '5'); //number45  typeof 3 number + 4+"5" =number45

//75
// console.log(typeof (3 + 4 + +'5'));  //number
// console.log((3 + 4 + +'5'));  //12

//76
// console.log([] == []); //false

//77
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return 1;
//   return num * 2;
// });
// console.log(data);  //[1,1,1]

//78
// function getInfo(member) {
//   member.name = "krushang";
// }
// const person = { name: "k" };
// getInfo(person);
// console.log(person); //{ name: 'krushang' } reason: person is object object passed as a perameter call by refrence than change value of person k to krushang and log krushang

//79
// function Car() {
//     this.make = "tata";
//     return {make: "kia"}
// }
// const myCar = new Car();
// console.log(myCar.make); //kia  reason: if return nahi then tata

//80
// (() => {
//     let x = (y = 10);
// })
//     ();
// console.log(typeof x);  //let block lvl scope then x is not defined in out of block then log undefined
// console.log(typeof y);  //number

//81
// (() => {
//     let x = y = 10;
// })();
// console.log(typeof y);  //number cuz y is variable (var y)

//82
// (() => {
//     let x = 10;

// })();
// (() => {
//     let x = 10;
// })();
// console.log(typeof x);  //undefined cuz let key word

//83
// (() => {
//     let x = y = 10;
// })();
// (() => {
//     let x = y = 20;
// })();
// console.log(y);   //20

//84
// let x = 100;
// (() => {
//     var x = 20;
// })();
// console.log(x);  //100

//85
// console.log(true - true); //0
// console.log(!true - true); //-1  !true = !1 = 0-1 = -1
// console.log(typeof true);   //boolean
// console.log(true + + "10"); // 11   true = 1 false = 0

//String question

//let str = "Hello,how are you";



//1 convert str in only 1 array

// console.log(str.split());


//2 convert string to array with reach character

// console.log([...str]);
// console.log(str.split("")) //single character


//3 convert string to array with space or any sequence

// console.log(str.split(" "));


//4 replace any character

// arr = str.split("");
// arr[0] = "j";
// console.log(arr.join(""));

//other way
// console.log(str.replace(/H/,"j"))


//5 get substring from string

// sub = str.substring(1);
// console.log(sub);


//6 remove last character

// console.log(str.substring(0, str.length - 1));


//7 remove first element

// arr = str.split(" ");
// arr.shift();
// console.log(arr.join(" "));


//8 remove string before specific character

// let temp = str.split('o');
// console.log(temp[0]);  //hell


//9 reverse

// let arr = str.split("").reverse();
// console.log(arr.join(""));


//10 remove extra space

// console.log(str.trim());


//11 concat two string

// let str1 = "kru";
// let str2 = "shang"
// console.log(str1.concat(str2)); //krushang

//12 left right remove space

// let str = "   hello   "
// console.log(str.trimStart());  //left side
// console.log(str.trimEnd());    //right side
