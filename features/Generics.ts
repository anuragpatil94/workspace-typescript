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
