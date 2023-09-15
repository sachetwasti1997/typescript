// Type Annotation - Code we add to typescript to tell what type of 
// value a variable will refer to

// Type Inference - Typescript figures out what type of value a type refers to

let apples: number = 5; // type annotation

apples = 10;

// apples = ""; throws error

let speed: string = 'fast';

// speed = 10; error

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, true, false];

class Car {

}

let car: Car

// Object Literals
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When to use annotation
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line 
//    and initialise it in another
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;

for (let i=0; i<words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
console.log(foundWord);

// 3) Variables whose type cannot be inferred correctly
let numbers1 = [];
let positiveNumber: boolean | number = false;

for (let index = 0; index < numbers1.length; index++) {
  const element = numbers1[index];
  if (element > 0) {
      positiveNumber = element;
  }
}

console.log(positiveNumber);
