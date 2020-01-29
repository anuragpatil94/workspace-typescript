//We don't need to write annotations since if the array has data it inferences the type
const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// We need only when the array is empty
const numbersList: number[] = [];

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
