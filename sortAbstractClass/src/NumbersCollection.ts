import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{

  constructor(public data: number[]) {
    super();
  }

  compare(lftInx: number): boolean {
    return this.data[lftInx] > this.data[lftInx + 1];
  }

  swap(lftInx: number): void {
    const leftHand = this.data[lftInx];
    this.data[lftInx] = this.data[lftInx + 1];
    this.data[lftInx + 1] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }

}