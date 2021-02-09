function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return Math.round((population / worldPopulation) * 10000) / 100 + "%";
}

population = [6, 300, 9.5];
function populationPercentages(population) {
  const percentages = [];
  for (const element of population) {
    percentages.push(percentageOfWorld1(element));
  }
  return percentages;
}
const percentage = populationPercentages(population);
console.log(percentage);
