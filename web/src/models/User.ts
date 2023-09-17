import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  update(info: UserProps): void {
    Object.assign(this.data, info);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((res: AxiosResponse): void => {
      this.update(res.data);
    });
  }

  save(): void {

    const id = this.get('id'); 

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
