class sortNumber {
  constructor() {
    this.numList = [];
  }
  addNum(num) {
    if (!this.getAll().includes(num) && sortNumber.checkPrimal(num))
      this.numList.push(num);
    this.getAll().sort((a, b) => a - b);
  }
  removeNum(num) {
    const index = this.numList.indexOf(num);
    if (index === -1) return false;
    const result = this.numList.splice(index, 1);
    return result === [] ? false : true;
  }
  getAll() {
    return this.numList;
  }
  print() {
    console.log(this.numList);
  }
  static checkPrimal(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  static share(sortNumberInput) {
    let shared = 0;
    for (number in sortNumberInput.getAll) {
      if (this.numList.find(number)) shared++;
    }
    return shared;
  }
  //static!!!
  union(anotherSorted) {
    const newSorted = new sortNumber();
    for (let number of anotherSorted.getAll()) {
      newSorted.addNum(number);
    }
    for (let number of this.getAll()) {
      newSorted.addNum(number);
    }
    return newSorted.getAll();
  }
}

const sortNumber1 = new sortNumber();
sortNumber1.addNum(11);
sortNumber1.addNum(5);
sortNumber1.addNum(3);
sortNumber1.addNum(5);

sortNumber1.addNum(7);
const sortNumber2 = new sortNumber();
sortNumber2.addNum(23);
sortNumber2.addNum(31);

console.log(sortNumber1.union(sortNumber2));
