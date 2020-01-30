// export class NumbersCollection{
//     data: number[];
//     constructor(data:number[]){
//         this.data = data
//     }
// }
export class NumberCollection {
  constructor(public data: number[]) {
    this.data = data;
  }

  // This when called is not considered as a function
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
