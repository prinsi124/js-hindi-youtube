// Primitive

// 7 types : String, Boolearn, Number, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3564856967584656n



// Reference (Non Primitive)

// Array, Objects, Functions

const flowers = ["rose", "lotus", "sunflower"];
let myobj = {
    name: "prinsi",
    age: 21,
} 

const myFunction = function() {
    console.log("Hello World");
} 

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3