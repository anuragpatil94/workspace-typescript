interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string; //has a Function
// }

// Object
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

// Really long annotation
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log("Name: ", vehicle.name);
  console.log("Year: ", vehicle.year);
  console.log("Broken: ", vehicle.broken);
};

// Using Interface
const printVehiclee = (vehicle: Vehicle): void => {
  console.log("Name: ", vehicle.name);
  console.log("Year: ", vehicle.year);
  console.log("Broken: ", vehicle.broken);
};

printVehicle(oldCivic);
printVehiclee(oldCivic);
