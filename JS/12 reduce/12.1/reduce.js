function max(array) {
  return array.reduce((max, current) => (max = max > current ? max : current));
}
let array = [1, 4, 63, 2, 6, 63, 62];
console.log(max(array));

function sumOfEvenNumbers(array) {
  return array.reduce(
    (accumulator, current) => (accumulator += current % 2 == 0 ? current : 0),
    0
  );
}
console.log(sumOfEvenNumbers(array));

function average(array) {
  return array.reduce((accumulatorAvarage, current, index, array) => {
    accumulatorAvarage += current;
    if (index === array.length - 1) {
      accumulatorAvarage /= array.length;
    }
    return accumulatorAvarage;
  });
}
console.log(average(array));
