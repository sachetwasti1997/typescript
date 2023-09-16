import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(index: number): boolean;
  swap(index: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let index = 0; index < length; index++) {
      for (let j = 0; j < length - index; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }
  }
}
