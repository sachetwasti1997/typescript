const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [];

//Help with inference with extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); --- error

// Help with map
carMakers.map((car) => car.toUpperCase());

//Flexible Types
const importantDates: (Date| string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date()); 