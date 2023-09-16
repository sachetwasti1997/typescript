// console.log('Hi');

import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";
import { NumbersCollection } from "./NumbersCollection";
// import { Sorter } from "./Sorter";

// // const logSomething = (message: string): void => {
// //   console.log(message);
// // };

// // logSomething('Sachet');

const cl = new NumbersCollection([-4, 2, -1, 0]);
cl.sort();
console.log(cl.data);

const charCol = new CharacterCollection('Sachet');
charCol.sort();
console.log(charCol.data);

const llist = new LinkedList();
llist.add(12);
llist.add(1);
llist.add(2);
llist.add(21);
llist.add(4);
llist.add(-10);
// const llistCollection = new Sorter(llist);
llist.sort();
let hd = llist.head;
if (hd != null) {
  while(hd) {
    console.log(hd.data);
    hd = hd.nextNode;
  }
}




