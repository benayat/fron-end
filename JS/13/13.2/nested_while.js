function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return Math.round((population / worldPopulation) * 10000) / 100 + "%";
}

population = [6, 300, 9.5];
function populationPercentages(population) {
  const percentages = [];
  let itemsRemanings = population.length;
  while (itemsRemanings--) {
    percentages.push(percentageOfWorld1(population[itemsRemanings]));
  }
  return percentages;
}
const percentage = populationPercentages(population);
console.log(percentage);

//for this task, obviously the for loop is better, because I just used the index from the loop, and it was easyer.
