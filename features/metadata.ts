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

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrrrrrrrrr");
  }
}
// decorator
function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// decorator
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    router.get(path, middleware, target.prototype[key]);
  }
}
