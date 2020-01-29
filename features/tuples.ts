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
