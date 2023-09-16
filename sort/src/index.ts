// console.log('Hi');

import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const logSomething = (message: string): void => {
//   console.log(message);
// };

// logSomething('Sachet');

const cl = new Sorter(new NumbersCollection([-4, 2, -1, 0]));
cl.sort();
console.log(cl.collection);



