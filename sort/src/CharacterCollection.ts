export class CharacterCollection {
  constructor (public data: string) {}

  get length(): number {
    return this.data.length;
  } 

  compare(index: number): boolean {
    return this.data[index].toLowerCase() > this.data[index+1].toLowerCase();
  }

  swap(index: number): void {
    const charArray = this.data.split('');

    const leftHand = charArray[index];
    charArray[index] = charArray[index+1];
    charArray[index+1] = leftHand;

    this.data = charArray.join('');
  }

}