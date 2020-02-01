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

// ------------------------------------------------------------------------------------------------------------------

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b"]);

// Uses type inference to make generic type = string
const arr = new ArrayOfAnything(["a", "b"]);

// ------------------------------------------------------------------------------------------------------------------
// Function Generics

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

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

// ------------------------------------------------------------------------------------------------------------------
// Generic Constraints

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
