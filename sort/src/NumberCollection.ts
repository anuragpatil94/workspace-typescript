import { Sorter } from "./Sorter";

// export class NumbersCollection{
//     data: number[];
//     constructor(data:number[]){
//         this.data = data
//     }
// }
// The name doesn't need to match between interface and class params
export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // `get` makes sure length() is not considered as a function
  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
