import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    private rootURL: string,
    public deserlise: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootURL).then((res: AxiosResponse) => {
      res.data.forEach((val: K) => {
        this.models.push(this.deserlise(val));
      });
      this.trigger('change');
    })
  }
}