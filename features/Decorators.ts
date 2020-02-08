@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  /**
   * We are trying to excute a piece of code such that whenever pilot is called and
   * we get an error, we run this decorator code
   */
  @logError("Boat Sunk!!")
  pilot(): void {
    throw new Error();
    console.log("Jush");
  }

  move(
    @paramDecorator speed: string,
    @paramDecorator b: string,
    c: number
  ): void {
    throw new Error();
  }
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

/**
 * Decorator cannot access any instance property ever
 * @param target
 * @param key
 */
function testDecorator(target: any, key: string) {
  console.log(key);
}

/**
 *
 * @param target Object.Prototype
 * @param key key on which decorator is to be applied
 * @param desc Object that has some configuration options around a property defied in the class object
 */
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();
