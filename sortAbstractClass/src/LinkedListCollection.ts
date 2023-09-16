import { Sorter } from "./Sorter";

class NodeLL {
  nextNode: NodeLL | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: NodeLL|null = null;
  lengthLL: number = 0;
  
  add(data: number): void {
    const node = new NodeLL(data);

    if (!this.head) {
      this.head = node;
      this.lengthLL = 1;
      return;
    }

    let currNode = this.head;
    while (currNode.nextNode) {
      currNode = currNode.nextNode;
    }
    currNode.nextNode = node;
    this.lengthLL += 1;
  }

  get length(): number {
    return this.lengthLL;
  }

  at(index: number): NodeLL | null {
    let currNode = this.head;
    while (index > 0 && currNode) {
      currNode = currNode.nextNode;
      index --;
    }
    return currNode;
  }

  compare(index: number): boolean {
    const node = this.at(index);
    if (node != null && node.nextNode != null) {
      return node.data > node.nextNode.data;
    }
    else {
      return false;
    }
  }

  swap(index: number): void {
    const node = this.at(index);
    if (node != null && node.nextNode != null) {
      const data = node.data;
      node.data = node.nextNode.data;
      node.nextNode.data = data;
    }
  }

}
