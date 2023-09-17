import { UserProps } from "./User";

export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(propName: K): T[K]  => {
    return this.data[propName];
  }

  update(info: T): void {
    Object.assign(this.data, info);
  }

  getAll(): T {
    return this.data;
  }
}

// const attr = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: "asf"
// });

// const name = attr.get('name');
// const age = attr.get('age');
// const id = attr.get('id');

