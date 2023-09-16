import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(index: number): boolean;
  swap(index: number): void;
}

export abstract class Sorter {
  abstract compare(inde: number): boolean;
  abstract swap(index: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let index = 0; index < length; index++) {
      for (let j = 0; j < length - index - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}
