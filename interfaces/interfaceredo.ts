/*
Whenever we define an interface, we are creating a new type inside application,
describing property, names and value types of an object
*/

interface Reportable {
  report(): string;
}

const oldCivic2 = {
  model: 'civic',
  year: 2000,
  broken: true,
  report() {
    return `Your car has, ${this.model}, of year ${this.year} is, ${
      this.broken ? 'in a bad shape!' : 'good'
    }`;
  },
};

const ferrari2 = {
  model: 'ferrari',
  year: 2000,
  broken: false,
  report(): string {
    return `Your car has, ${this.model}, of year ${this.year} is, ${
      this.broken ? 'in a bad shape!' : 'good'
    }`;
  },
};

/**
 * InOrder to call this function an object must be passed in the parameter that
 * meets the criteria set by Vehicle Interface
 * The object may have other properties, but if it meets criteria of Interface
 * @param vehicle
 */
const reportSummary = (vehicle: Reportable) => {
  vehicle.report();
};

reportSummary(oldCivic2);
reportSummary(ferrari2);
