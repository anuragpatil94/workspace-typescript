# Typescript

> Typescript = Javascript + **_A Type System_**

## Table of Contents

- [Typescript](#typescript)
  - [Table of Contents](#table-of-contents)
  - [Goals](#goals)
    - [Syntax + Features](#syntax--features)
    - [Design Patterns with TS](#design-patterns-with-ts)
  - [Advantages](#advantages)
  - [Commands](#commands)
    - [Run Typescript](#run-typescript)
  - [Steps](#steps)
    - [FetchJSON](#fetchjson)
    - [Type System](#type-system)
      - [Plain Definition + Overview](#plain-definition--overview)
      - [Why do we care](#why-do-we-care)
      - [When to use this](#when-to-use-this)
    - [Type Annotations + Type Inference](#type-annotations--type-inference)
      - [Variables](#variables)
      - [Functions](#functions)
      - [Objects](#objects)
      - [When to use Type Annotations](#when-to-use-type-annotations)
    - [Typed Arrays](#typed-arrays)
    - [Tuples](#tuples)
    - [Interface](#interface)
  - [Packages](#packages)

## Goals

### Syntax + Features

- Understand basic types in TS
- Function typing + annotations
- Type definition files
- Arrays in TS
- Modules Systems
- Classes + Refresher on OOP
- What is an interface?
- What is the syntax for defining an interface?

### Design Patterns with TS

- Projects
- How do we use interfaces to write reusable code?

## Advantages

- Helps us catch errors during development
- 👤 Uses 'type annotations' to analyze our code
- Only active during development
- ❌Doesn't provide any performance optimization

## Commands

- `tsc -v` -> Typescirpt Compiler

### Run Typescript

- Compile the file `tsc file.ts`
- Compile file is `file.js`. Run the file as `node file.js`

> ts-node will combile both the commands at the same time. So, we don't have to write command 2 times.

- Command - `ts-node file.ts`

## Steps

### FetchJSON

1. Make a network request to fetch some JSON and print the result
   How Typescript handles errors

### Type System

#### Plain Definition + Overview

Type - Easy way to refer to the different properties + functions that a value has.

#### Why do we care

- To avoid errors
- increases redability of the code

#### When to use this

- Everywhere, Any value which is declared has a type associated with it.

### Type Annotations + Type Inference

- These are used differently for `variables`, `functions`,  `objects`

> ***Type Annotations*** - Code we add to tell ts what type of value a variable will refer to \
> ***Type inference*** - Typescript tries to figure out what type of value a variable refers to based on how the variable was initialized.

#### Variables

```typescript
let apples: number = 5;

// Error if something else than the annotated type
// apples = "hello";

let speed: string = "fast";
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
```

#### Functions

> Only inferences return value \
> NO TYPE INFERENCE FOR ARGUMENTS hence Always add annotations for arguments

```typescript
/**
 * NO TYPE INFERENCE FOR ARGUMENTS hence Always add annotations for arguments
 * @param a :number
 * @param b :number
 *
 * TYPE INFERENCE ONLY ON RETURN
 */
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiphy = function(a: number, b: number): number {
  return a * b;
};


/**
 * All 3 statements return void
 * @param message string
 */
const logger = (message: string): void => {
  console.log(message);
  //   return null;
  //   return undefined;
};

/**
 * Only when it only throws error. if the function returns errors or return string then we annotate string
 * @param message string
 */
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todaysWeather);

// ES2015
const logWeather2015 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

// Destructuring
const logWeather2016 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
```

```typescript
// In the annotation - what input we send to the function and what output is returned
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

#### Objects

```typescript
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};
```

#### When to use Type Annotations

- When we declare a variable on one line then initialize it later
- When we want a variable to have atype that can't be infered
- When a function returns the `any` type and we need to clarify the value
  - Avoid `any` at all cost

```typescript
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
})

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
```

### Typed Arrays

```typescript
  //We don't need to write annotations since if the array has data it inferences the type
  const carMakers: string[] = ["ford", "toyota", "chevy"];
  const dates = [new Date(), new Date()];
  const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

  // We need only when the array is empty
  const numbersList: number[] = [];
```

- TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can ge help with `map`, `forEach`, `reduce` functions
- Flexible - arrays can still contain multiple different types

```typescript
  // Help with Inference when extracting values
  // Hover over car to check inference
  const car = carMakers[0];
  const date = dates[0];

  // prevent adding incompatible values
  // carMakers.push(100);

  // Help with 'map'
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  });

  // Flexible Types in array
  const importantDates = [new Date(), "2020-28-01"];
  const importantDatess: (Date | string)[] = [new Date()];
  importantDatess.push("2020");
  // importantDatess.push(2020);
```

### Tuples

- Array-like structure where each element represents some property of a record

```typescript
  const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
  };

  // Still Array
  // const pepsi = ["black", true, 40];

  // This annotation turns array to tuple
  const pepsi: [string, boolean, number] = ["black", true, 40];

  // Type Alias
  type Drink = [string, boolean, number];
  const sprite: Drink = ["clear", true, 40];

```

### Interface

> Creates a new type, describing the property names and value types of an object

`Interface` + `Classes` -> Strong reusable code

```Typescript

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehiclee = (vehicle: Vehicle): void => {
  console.log("Name: ", vehicle.name);
  console.log("Year: ", vehicle.year);
  console.log("Broken: ", vehicle.broken);
};

printVehiclee(oldCivic);

// Another Example
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; //has a Function
}

```

## Packages

- typescript
- ts-node   - To build and run with single command
