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

 Type Annotations - Code we add to tell ts what type of value a variable will refer to

 Type inference - Typescript tries to figure out what type of value a variable refers to based on how the variable was initialized.

#### Variables

```JavaScript
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

```Javascript
// In the annotation - what input we send to the function and what output is returned
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

#### Objects

```Javascript
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

```Javascript
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

## Packages

- typescript
- ts-node
