import "reflect-metadata";

// Metadata is a secret info that doesn't show anywhere except the use of the package

const plane = {
  color: "red"
};

// Generate or define metadata
Reflect.defineMetadata("note", "Hi There!", plane);
console.log(plane);

// in this case metadata is assigned on a property of an object
Reflect.defineMetadata("note", "Hi There!", plane, "color");
console.log(Reflect.getMetadata("note", plane, "color"));

// Get the metadata
const note = Reflect.getMetadata("note", plane);
console.log(note);

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
