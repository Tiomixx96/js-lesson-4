// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// Зробив з відповіддю на конфірм

// let checkAge = function (age) {
//   return age >= 18
//     ? true
//     : confirm("Батьки дозволили?")
//     ? alert("Zaebis")
//     : alert("Ne zaebis");
// };

// checkAge(11);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// Зробив з тим шо можно ввести число

// let checkNumber = function (a, b) {
//   a = Number(prompt("Enter the first number"));
//   b = Number(prompt("Enter the second number"));

//   if (a < b) {
//     return console.log(a);
//   } else return console.log(b);
// };
// checkNumber();

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask("Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const yes = () => {
//   alert("Ви погодились.");
// };
// const no = () => {
//   alert("Ви скасували виконання.");
// };

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask("Ви згодні?", yes, no);
