// the population is given in Milions, to not overload the system with big numbers for nothing.
function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return Math.round((population / worldPopulation) * 10000) / 100 + "%";
}
const israel = 9,
  US = 300,
  UEA = 9.5;

//calculated with two decimal digits after the point:
console.log(percentageOfWorld1(israel));
console.log(percentageOfWorld1(US));
console.log(percentageOfWorld1(UEA));

// const PopulationPercentage = function (population) {
//   return Math.round((population / 7900) * 10000) / 100 + "%";
// };
const PopulationPercentage = (population) =>
  Math.round((population / 7900) * 10000) / 100 + "%";
console.log(PopulationPercentage(israel));
console.log(PopulationPercentage(US));
console.log(PopulationPercentage(UEA));
