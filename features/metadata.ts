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
