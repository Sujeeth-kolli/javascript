// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// function greet(username) {
//     return `Hello ${username}`
// }

// console.log(greet("HuXn"));

// ----- Arrow Function -----
// greet = (username) => {
//     return `Hello ${username}`
// }

// console.log(greet('HuXn'));

// ----------------------------
greet = (username) => `Hello ${username}`;
console.log(greet("HuXn"));
// ----------------------------

const double = (number) => number * 2;
console.log(double(5));

// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

setTimeout( ()=> {
  console.log("Hello");
  setTimeout( ()=> {
    console.log("Hey");
    setTimeout( ()=> {
      console.log("Namaste");
      setTimeout( ()=> {
        console.log("Hi");
        setTimeout( ()=> {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);