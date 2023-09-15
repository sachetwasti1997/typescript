class Vehicle {

  constructor(private color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }

  protected getColor(): string {
    return this.color;
  }
}

//We cannot change the modifier in a child class
class Car extends Vehicle {

  constructor(private wheels: number, color: string) {
    super(color);
  }

  // override
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle('Blue');
vehicle.drive();

const car = new Car(45, 'White');
car.drive();
// car.honk(); cannot do this