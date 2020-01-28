let apples: number = 5;

// Error if something else than the annotated type
// apples = "hello";

let speed: string = "fast";
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// In the annotation - what input we send to the function and what output is returned
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
// const coordinates = JSON.parse(json); // any type, returns any type
const coordinates: { x: number; y: number } = JSON.parse(json); // any type, returns any type
// 'false' -> JSON.parse -> any

// 2) Declare first, Initialize later
let words = ["red", "green"];
// let foundWord; //Type Any
let foundWord: boolean; //Type Any
words.forEach(word => {
  if (word == "green") {
    foundWord = true;
  }
});

// 3) When Variable cannot be inferred correctly

let numberss = [-10, -1, 12];
// Bad code - 2 different types  <0 -> false,    >0 -> print num
// let numberssAboveZero = false;   // Always boolean
let numberssAboveZero: boolean | number = false; //boolean or number

numberss.forEach(element => {
  if (element > 0) {
    numberssAboveZero = element;
  }
});
