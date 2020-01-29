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
