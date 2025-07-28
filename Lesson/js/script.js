// Functions

// function showMessage(name, city) {
//   console.log("Hello my name is " + name + " I'm from " + city);
// }

// showMessage("NATO", "Kyiv");

// const userName = "Ann";

// const sayHi = function () {
//   let message = "Hello, my name Ivan";
//   console.log(message);
// };

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

// Стрілочні функції

// const testFunc = function (a, b) {
//   console.log("a: ", a);
//   console.log("b: ", b);

//   return;
// };

// testFunc(1, 123;

// Все виконується зверху вниз
// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };
// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };

// a();

// Кожна ф-я крім стрілочних має свій масив аргументів

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };
// addName(1, 3, 5);

// Operator REst "..."
// const addName = function (...arg) {
//   console.log(arg);
// };
// addName(1, 3, 5);

// Callbacks

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOkay() {
//   console.log("You say ok");
// }

// function showCancel() {
//   console.log("You say no");
// }

// ask("Yes or no?", showOkay, showCancel);

// High Order Function (також callback)

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   return console.log("goodbye!");
// }

// checkAge(1);

// Return не обов'язково щось повертає
// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to movie");
// }

// showMovie(23);

// Стрілкові функції

// const test = (arg) => {
//   console.log(arg);
// };

// test("Hello");

// const showAge = (age) => {
//   if (age > 21) {
//     return console.log("Hello!");
//   }
//   return console.log("Bye!");
// };

// showAge(22);

// const a = () => {
//   console.log("a");
// };
// const b = () => {
//   console.log("b");
// };
// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c();

// console.log(document);

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name ="number"]');
// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));
