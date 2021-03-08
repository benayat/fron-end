class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    console.log(`animal name: ${this.name} \nanimal sound: ${this.sound}`);
  }
}
const animal1 = new Animal('dog', 'wofff');
const animal2 = new Animal('cat', 'meauuu');
const animal3 = new Animal('another dog', 'bark');
animal1.print();
