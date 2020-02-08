class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("Jush");
  }
}

// 1st Decorator
function testDecorator(target: any, key: string): void {
  console.log("Target: ", target);
  console.log("Key:", key);
}
