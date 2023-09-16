import { faker } from "@faker-js/faker";

export class User {

  public name: string; 
  public location: { lat: number; lng: number }

  constructor() {
    this.name = faker.person.firstName("male")+" "+faker.person.lastName("male");
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }

}
