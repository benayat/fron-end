class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  getBrand() {
    return this.brand;
  }
  getSpeed() {
    return this.speed;
  }
  print() {
    console.log(`car brand: ${this.brand}\ncar speed: ${this.speed}`);
  }
  setSpeed(speed) {
    this.speed = speed;
  }
}
const carArray = [
  new Car('Mazda', 150),
  new Car('Mercedes', 200),
  new Car('Volvo', 210),
  new Car('Fiat', 20),
];
let fastest = carArray.reduce((accumulator, current) =>
  accumulator.getSpeed() < current.getSpeed() ? current : accumulator
);
fastest.print();
function sortCars(carArray) {
  return carArray.sort((car1, car2) => car1.getSpeed() - car2.getSpeed());
}
console.log(sortCars(carArray));
