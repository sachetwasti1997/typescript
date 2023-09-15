/*
Whenever we define an interface, we are creating a new type inside application,
describing property, names and value types of an object
*/

interface Vehicle {
  model: string;
  broken: boolean;
  year: number;
  printCar(model: string): void;
}

const oldCivic = {
  model: 'civic',
  year: 2000,
  broken: true,
  printCar(model: string) {
    console.log(
      `Your car has, ${model} is, ${this.broken ? 'in a bad shape!' : 'good'}`
    );
  },
};

const ferrari = {
  model: 'ferrari',
  year: 2000,
  broken: false,
  printCar(model: string) {
    console.log(
      `Your car has, ${model} is, ${this.broken ? 'in a bad shape!' : 'good'}`
    );
  },
};

/**
 * InOrder to call this function an object must be passed in the parameter that
 * meets the criteria set by Vehicle Interface
 * The object may have other properties, but if it meets criteria of Interface
 * @param vehicle
 */
const printVehicle = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.model}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  vehicle.printCar(vehicle.model);
};

printVehicle(oldCivic);
printVehicle(ferrari);
