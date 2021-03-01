const person = {
  name: "ben",
  printName: function () {
    console.log(this.name);
  },
  printNameTimeOut: function () {
    const id = setTimeout(this.printName.bind(this), 3000);
  },
};
person.printName();
person.printNameTimeOut();
