
class ArrayOfNumber {
  constructor (public collection: number[]) {}

  get (index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor (public collection: string[]) {}

  get (index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor (public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c']);
const arr2 = new ArrayOfAnything([1, 2, 3]); // Type Inference

// FUNCTION GENERICS

function printString(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}

function printNumber(array: number[]): void {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
}

function printAnything<T>(array: T[]): void {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3, 4, 5]);

// Generic Constraints
class House {
  print(): void {
    console.log("I am a House");
  }
}

class Car {
  print(): void {
    console.log("I am a Car");
  }
}

interface Print {
  print(): void;
}

function printHousesOrCars<T extends Print>(array: T[]) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.print();
  }
}

printHousesOrCars<House>([new House(), new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car(), new Car()]);