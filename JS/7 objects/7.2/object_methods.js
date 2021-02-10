let mycountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9,
  neighbours: ["Jordan", "Egypt", "Syria", "Lebanon"],
  describe: function () {
    str = `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    return str;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(mycountry.describe());
console.log(mycountry.checkIsland());
console.log(mycountry.isIsland);
