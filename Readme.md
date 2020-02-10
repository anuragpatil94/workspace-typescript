# Typescript

> Typescript = Javascript + **_A Type System_**

## Table of Contents

- [Typescript](#typescript)
  - [Table of Contents](#table-of-contents)
  - [Goals](#goals)
    - [Syntax + Features](#syntax--features)
    - [Design Patterns with TS](#design-patterns-with-ts)
  - [Advantages](#advantages)
  - [Setup Typescript](#setup-typescript)
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
    - [Class](#class)
  - [(Project) Maps](#project-maps)
  - [(Project) Sort](#project-sort)
    - [Typescript Compiler Configuration](#typescript-compiler-configuration)
      - [Automate Compiling and Execution](#automate-compiling-and-execution)
    - [Type Guard](#type-guard)
  - [(Project) Football Stats](#project-football-stats)
    - [ENUM](#enum)
      - [When to use ENUM](#when-to-use-enum)
    - [Type Assertion](#type-assertion)
      - [Converting to TUPLE](#converting-to-tuple)
    - [Reusability](#reusability)
      - [Refactor #1](#refactor-1)
      - [Refactor #3](#refactor-3)
    - [Retrospective (Interface or Abstract Class)](#retrospective-interface-or-abstract-class)
    - [Generics](#generics)
      - [Class Generics](#class-generics)
      - [Function Generics](#function-generics)
      - [Generic Constraints](#generic-constraints)
  - [(Project) Web Framework](#project-web-framework)
  - [Decorators](#decorators)
    - [Property Descriptor](#property-descriptor)
    - [Decorator Factory](#decorator-factory)
    - [Parameter Decorator](#parameter-decorator)
    - [Class Decorator](#class-decorator)
    - [Disadvantage](#disadvantage)
  - [(Project) Typescript with Express](#project-typescript-with-express)
    - [TS with JS Libraries](#ts-with-js-libraries)
    - [Overview](#overview)
    - [Dealing with bad typescript](#dealing-with-bad-typescript)
    - [Integrating Typescript with Express Code](#integrating-typescript-with-express-code)
    - [Using Decorators](#using-decorators)
      - [Solution on how to make sure how the decorators are ran](#solution-on-how-to-make-sure-how-the-decorators-are-ran)
      - [Metadata](#metadata)
    - [Metadata for Login](#metadata-for-login)
    - [RouteBinding](#routebinding)
    - [Working Process](#working-process)
  - [(Project) React](#project-react)
    - [React-TS Advantages](#react-ts-advantages)
    - [React-TS Disadvantages](#react-ts-disadvantages)
    - [Handling Props with TS](#handling-props-with-ts)
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

## Setup Typescript

1. create tsconfig.json - `tsc --init`
2. uncomment `"outDir"` and set it to build/ folder
3. uncomment `"rootDir"` and set it to the folder that is to be build. ex src/
4. Following scripts in package.json

   ```json
    "scripts": {
      "start:build": "tsc -w",
      "start:run": "nodemon build/index.js",
      "start": "concurrently npm:start:*"
    }
   ```

## Commands

- `tsc -v` -> Typescirpt Compiler
- `tsc-node <filename>.ts` -> build and run at same time in cmd
- `parcel <filename>.ts` -> This will build the html index file connecting whole project will run on a server.
- `tsc --init` -> To create TS Config file.
- `tsc` -> Once TS Config file is set up we can run `tsc` to build whole src files.
- `tsc -w` -> If an changes made we can run this command to rebuild but it will only look for changes instead of build whole project again
- `yarn create react-app <name> --typescript` -> Create a React Project supporting Typescript

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

- These are used differently for `variables`, `functions`, `objects`

> **_Type Annotations_** - Code we add to tell ts what type of value a variable will refer to \
> **_Type inference_** - Typescript tries to figure out what type of value a variable refers to based on how the variable was initialized.

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

### Class

> Blueprint to create an object with some fields and methods to represent a 'thing'

```typescript
class Vehicle {
  drive(): void {
    console.log("Vroom Vroom");
  }

  honk(): void {
    console.log("Peep!");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Boom Boom");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
```

## (Project) Maps

- `Type Definition File` to connect typescript and javascript

- But some modules doesn't come with type declaration files.
  - You will know this based on an error which is shown when the package is imported.
  
  ```text
    WARNING TEXT
    - 'faker' is declared but its value is never read.ts(6133)
    - Could not find a declaration file for module 'faker'. '.../node_modules/faker/index.js' implicitly has an 'any' type.
    - Try `npm install @types/faker` if it exists or add a new declaration (.d.ts) file containing `declare module 'faker';`ts(7016)
  ```

- For example faker doesn't have type declaration file in its package
- In such cases we use @types package for the package. example `@types/{library name}`
- `@types/faker`

## (Project) Sort

- In this application we are making a sorting algorithm such that we can take number, string or linked list to sort.
- We will be focusing on interface and class such  that we reuse the code

### Typescript Compiler Configuration

- To make sure that the .js file which is created on compiling .ts file goes to the correct folder like `build`, we have to create a file called tsconfig.json we run `tsc --config` command
- To do this,
  - we find 2 properties in the `tsconfig.json` file. `outDir` for build files and `rootDir` for Source files
    - `tsc --init` -> To create TS Config file.
    - `tsc` -> Once TS Config file is set up we can run `tsc` to build whole src files.
    - `tsc -w` -> If an changes made we can run this command to rebuild but it will only look for changes instead of build whole project again.
    - run using `node build/index.js`

#### Automate Compiling and Execution

- Use `Concurrently` to run multiple scripts 1) compile ts using `tsc -w` and 2) `nodemon` to run node everytime.

```json
//package.json file

  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }
```

### Type Guard

- `this.collection instanceof Array`

## (Project) Football Stats

- CSV -> Load -> Parse -> ANalyze -> Report
- Topics Covered
  - `enum`
  - `generics`
  - `abstract class`
  - `composition`

### ENUM

- This will also create a new type

```ts
// Just a way to show that the properties of an enum are very closely related values
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}
```

#### When to use ENUM

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

### Type Assertion

```ts
return [
  dateStringToDate(row[0]),
  row[1],
  row[2],
  parseInt(row[3]),
  parseInt(row[4]),
  row[5] as MatchResult                  // default behavior was that row[5] was a string. This is Type Assertion where we are trying to override Typescript's default behavior
];

// Instead of array since the index of each property won't change we will use TUPLE
```

#### Converting to TUPLE

```ts
// New Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  data: MatchData[] = [];                               // Changes Here
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .trim()
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(
        (row: string[]): MatchData => {                              // Changes Here
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
          ];
        }
      );
  }
}
```

### Reusability

#### Refactor #1

- Make CSVFileReader class a Abstract Class so that if in future we have any other kind of data, it can use CSVFileReader and create its own class that extends it.
- Since we don't want any reference to Football match in CSVFileReader, we have to somehow remove MatchData Type from the file. But that would create a issue because data property needs to have a type.
- We can change is to `any` but that's a bad refactor. Hence we use `Generics`

#### Refactor #3

- Using Interface
- So here what we are doing is creating a `interface` called `DataReader` which has same methods as `CSVFileReader`. This makes sure that infuture if we have any other file readers it would have this method and then we can use it for our own `<ANY>DataReader`.
- The way we do is we pass which reader we want to use as a parameter to out custom MatchReader Class, so that it can use the reusable code

### Retrospective (Interface or Abstract Class)

- INHERITANCE VS COMPOSITION
- IS A vs HAS A
- Delegating other classes in the Class if what Composition is so that class can use delegated classes.

### Generics

- Like functio narguments, but for types in class/function definitions
- Allows us to define the type of a propery/argument/return value at a future point
- Used for reusability

#### Class Generics

```ts
// Noting to do with generics

const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};

// Instead of above where we are just creating a new function everytime we do below
// Kindof a Generic but not really. but generic is same concept
const add = (a: number, b: number): number => {
  return a + b;
};
add(10, 1);
add(10, 2);

// Another Example
class HoldNumber {
  data: number;
}
class HoldString {
  data: string;
}

const holdNumebr = new HoldNumber();
holdNumebr.data = 123;

const holdString = new HoldString();
holdString.data = "asdlfkh";

// GENERICS
// Customize the definition of the class
// What we are trying to do is add type on the fly so that we don't have to create a duplicate class everytime.
// This is like an argument just the same way as we added b in the add function.
// If you understand the add analogy what we are doing here is same. instead of b -> <TypeOfData> for a class.
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdAnythingNumber = new HoldAnything<number>();
// gives error
// holdAnythingNumber.data = "akjsdfh";
holdAnythingNumber.data = 124;

const holdAnythingDate = new HoldAnything<Date>();
// Error
// holdAnythingDate.data = "2018/12/03";
holdAnythingDate.data = new Date();
```

- By Covention Generic Type has a very small name so. instead of `<TypeOfData>` it will be `<T>`

```ts
// Initial Example
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b"]);

// Uses type inference to make generic type = string because it checks array of strings
const arr = new ArrayOfAnything(["a", "b"]);
```

#### Function Generics

```ts
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b"]);
// Type Inference
printAnything(["a", "b"]);
// Error
// printAnything<number>(['a','b'])
```

#### Generic Constraints

```ts
class Car {
  print() {
    console.log("CAR");
  }
}

class House {
  print() {
    console.log("HOUSE");
  }
}

interface Printable {
  print(): void;
}

//Constraint will make sure that we will have a print method for type T.
// This is called adding a constraint
function printHousesAndCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    // It says that type t has no gaurantee that there will be print method
    arr[i].print();
  }
}

// Gives error because numbers don't have print method defined in Printable constraint
// printHousesAndCar([1, 2, 3]);
printHousesAndCar([new House(), new Car()]);
```

## (Project) Web Framework

- [Github Repository](https://github.com/anuragpatil94/Web-Framework)

## Decorators

- Function that can be used to modify/change/anything different properties/methods in the class
- Not the same as Javascript decorators
- Used on classes only
- Understanding the order in which decorators are ran are the key to understanding them.

 > Enable the `"experimentalDecorators"` and `"emitDecoratorMetadata"` flags in tsconfig

```typescript
    class Boat {
      color: string = "red";                    //Property

      get formattedColor(): string {            //accessor
        return `This boat's color is ${this.color}`;
      }

      @testDecorator
      pilot(): void {                           //method
        console.log("Jush");
      }
    }

    // 1st Decorator
    function testDecorator(target: any, key: string): void {
      console.log("Target: ", target);
      console.log("Key:", key);
    }

    Output:
      Target:  Boat { formattedColor: [Getter], pilot: [Function] }
      Key: pilot

    testDecorator(Boat.prototype, "pilot");   ----- same as -----    @testDecorator
```

- Decorators are applicable for Property, Accessor or Method
  - First argument `target` is prototype of the object `Boat`
  - Second argument is the key of the property/method/accessor on the object
  - Third argument is the property descriptor
  - Decorator are applied *ONE SINGLE TIME* when the code for this class is ran ie.when Javascript 1st parses whole code. (**NOT WHEN THE INSTANCE IS CREATED**).

### Property Descriptor

- For `Methods`
  - `writable` : Whether or not this property can be changed
  - `enumerable` : Whether or not this propety get looped over by a `for...in`
  - `value` : current value
  - `configurable` : property definition can be changed and propery can be deleted

```typescript
    class Boat {
      color: string = "red";
      get formattedColor(): string {
        return `This boat's color is ${this.color}`;
      }
      /**
       * We are trying to excute a piece of code such that whenever pilot is called and
       * we get an error, we run this decorator code
       */
      @logError
      pilot(): void {
        throw new Error();
        console.log("Jush");
      }
    }
    /**
     *
     * @param target Object.Prototype
     * @param key key on which decorator is to be applied
     * @param desc Object that has some configuration options around a property defied in the class object
     */
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function() {
    try {
      method();
    } catch (e) {
      console.log("Boat was sunk!");
    }
  };
}

new Boat().pilot();
```

### Decorator Factory

- Basically passing a param through decorator

```typescript
  @logError("Boat Sunk!!")
  pilot(): void {
    throw new Error();
    console.log("Jush");
  }

  function logError(errorMessage: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
      const method = desc.value;
      desc.value = function() {
        try {
          method();
        } catch (e) {
          console.log(errorMessage);
        }
      };
    };
  }

  new Boat().pilot();
```

### Parameter Decorator

```typescript
  move(
    @paramDecorator speed: string,
    @paramDecorator b: string,
    c: number
  ): void {
    throw new Error();
  }


function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

Output:
move 1
move 0
```

### Class Decorator

```ts
@classDecorator
class Boat {}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
Output:
[Function: Boat]
```

### Disadvantage

- Cannot access instace properties

## (Project) Typescript with Express

### TS with JS Libraries

- Use the lib normally, adding in basic type annotations where possible
- Use a TS Adapter that has helpers for using your lib with TS
- Twist your library to work with TS classes

### Overview

- A simple authentication application
  - features
    - protected routes
  - 2 versions

### Dealing with bad typescript

Solution 1 - Create your own interface extending the library interface

### Integrating Typescript with Express Code

1. Hard Way - Put express code into classes + use some advanced features of TS
   1. Advanced Features?
      1. DECORATORS

### Using Decorators

```ts
Example:

@controller('/auth')          // All the routes will start as /auth/..
class loginRoutes{
  @post('/login)              // Route Path Controller
  @validateBody('email','password')      // Validation
  @use(requireAuth)                      // Auth
  postLogin(req:Request, res:Response):void{
    const { email, password } = req.body;
    if (email && password && email === "a@b.com" && password === "pass") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid Email or Password");
    }
  }
}


function post(routeName:string){
  return function (target:any,key: string, desc: PropertyDescriptor){
    // target[key] is basically postLogin function in class
    router.post(routeName,target[key])
  }
}
```

#### Solution on how to make sure how the decorators are ran

- Node executes code
- Class definition rad in - devorators are executed
- Decorators associate route confiturations info with the methods by using metadata.
- all methods decorators run
- Class decorator of '@controller' runs last
- class decorator reads metadata from each method, adds complete route definitions to router

#### Metadata

- Snippets of info that can be tied to a mehod, property, or class definition
- cna be used from super custom stuff
- typescript will provide type information as metadata
- read and written using the reflect-metadata package

```ts
const plane = {
  color: "red"
};

// Generate or define metadata
Reflect.defineMetadata("note", "Hi There!", plane);
console.log(plane);

// Get the metadata
const note = Reflect.getMetadata("note", plane);
console.log(note);

// in this case metadata is assigned on a property of an object
Reflect.defineMetadata("note", "Hi There!", plane, "color");
console.log(Reflect.getMetadata("note", plane, "color"));
 ```

- `METADATA` is another object connected to target

```ts
@printMetadata
class Plane {
  color: string = "red";
  @markFunction("Hi There! THis is secret")
  fly(): void {
    console.log("vrrrrrrrrrrrrrr");
  }
}
// decorator
function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}
const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log("Outside :", secret);
// decorator
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log("print metadata: ", secret);
  }
}

OUTPUT:
{ color: 'red' }
Hi There!
Hi There!
print metadata:  Hi There! THis is secret
Outside : Hi There! THis is secret
```

### Metadata for Login

```ts
// controllers
@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
              <label>Email </label>
              <input name="email"/>
          </div>
          <div>
              <label>Password</label>
              <input name="password" type="password"/>
          </div>
          <button>Submit</submit>
        </form>
        `);
  }
}

// decorators
import "reflect-metadata";
export function get(path: string) {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    /**
     * 1st: name of the metadata variable we want to create
     * 2nd: value of the metadata we have to store
     * 3rd: target is the target object for which we are
     * defining metadata in this case maybe a class.
     * This is because as we saw that every class is stored like a object
     * and has a prototype object.
     * 4th: property of that object. if considered class as an object then its
     * functions are the properties
     */
    Reflect.defineMetadata("path", path, target, key);
  };
}

// controllers
import "reflect-metadata";
import { Router } from "express";
/**
 * Controller - iterate through all the properties of the class's prototype
 * And check to see if they have any metadata information associated with them
 * if yes, then it will take that metadata and associate it with express router
 */
export const router = Router();

export function controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; //LoginController.getLogin
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
```

### RouteBinding

```ts
// Avoid Duplication so create a binder to call it for different methods
function routeBinder(method: string) {
  return function(path: string) {
    return (target: any, key: string, desc: PropertyDescriptor): void => {
      /**
       * 1st: name of the metadata variable we want to create
       * 2nd: value of the metadata we have to store
       * 3rd: target is the target object for which we are
       * defining metadata in this case maybe a class.
       * This is because as we saw that every class is stored like a object
       * and has a prototype object.
       * 4th: property of that object. if considered class as an object then its
       * functions are the properties
       */
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

export const get = routeBinder("get");
export const post = routeBinder("post");
export const put = routeBinder("put");
export const del = routeBinder("del");
export const patch = routeBinder("patch");
```

### Working Process

- For each function/property we are checking for path and method metadata which we defined and then assign the http method for the path and its routeHandler which is the function it is currently looking at.

For Example - CHECK [this](#solution-on-how-to-make-sure-how-the-decorators-are-ran)
We have to create `GET \login` method. now we have class LoginController in which we have a function getLogin which we have to invoke on calling this route. Since this completely changes the coding style how do we do it? we use decorators and metadata. We create a decorator for get Route. This is something which is executed when the functions are looped through in controller.

## (Project) React

### React-TS Advantages

- Easier to Refactor
- Better understanding of the types

### React-TS Disadvantages

- Type Definition Files for Redux Libraries are not proper
- Lot of generics in code
- Lot of imports
- tough integration of redux with TS

### Handling Props with TS

- since props are kind of variables they need to have a type else TS will give an error.
- To make sure we know what props are supposed to be received we add an interface.

```ts
// All the different props we pass to the component
interface AppProps {
  color: string;
}
class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}
ReactDOM.render(<App color="red" />, document.querySelector("#root"));
```

- Error - `Property 'counter' does not exist on type 'Readonly<{}>'`
- This is because we have to add a new interface defining state.

## Packages

- `typescript`
- `ts-node` - To build and run with single command
- `parcel-bundler` - This package will allow to run typescript code easily on browser
- `faker` - To generate fake data
- `nodemon` - Rerun node anytime changes are detected
- `concurrently` - Run multiple script at the same time
- `@types/node` - type definition file for all internal node modules
- `reflect-metadata` - used for decorators
  