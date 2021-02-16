const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
function nestedLoops(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(`Neighbour: ${array[i][j]}`);
    }
  }
}
nestedLoops(listOfNeighbours);
