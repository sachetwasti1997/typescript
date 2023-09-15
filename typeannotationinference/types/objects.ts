const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name, coords: {lat, lng} } : {age: number, name: string, coords:{lat: number, lng: number}} = profile;

console.log(age, name, lat, lng);
