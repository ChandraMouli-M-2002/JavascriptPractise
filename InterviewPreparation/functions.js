// //Function Declaration

// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Mouli")); 

// //Function Expression

// const greet = function (name) {
//   return "Hello " + name;
// };
// console.log(greet("Mouli")); // Hello Mouli


// //Arrow Function
// const greet = (name) => "Hello " + name;
// console.log(greet("Mouli")); // Hello Mouli

// //Anonymous Function
// setTimeout(function () {
//   console.log("I am anonymous!");
// }, 1000);

// //Named Function Expression

// const greet = function greetFunc(name) {
//   return "Hello " + name;
// };
// console.log(greet("Mouli"));

// //IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("I run immediately!");
// })();

// //Generator Function
// function* numberGen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = numberGen();
// console.log(gen.next().value); // 1

// //. Async Function
// async function fetchData() {
//   return "Data fetched";
// }
// fetchData().then(console.log);

console.log(this);//window object

// const person = {
//   name: "Mouli",
//   greet:  ()=> {
//     console.log("Hello, " + this.name);
//   },
// };

// person.greet(); 


//What are call, apply, and bind?

const person = {
  name: "Mouli",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.call(person, "Hello", "!"); // Hello, Mouli!

greet.apply(person, ["Hi", "!!!"]); // Hi, Mouli!!!

const greetMouli = greet.bind(person, "Hey"); 
greetMouli("?"); // Hey, Mouli?