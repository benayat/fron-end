/* Front end development: Basics
JavaScript – Basketball score
The following exercise contains the following subjects:
 Order Of Operation
 If statements
Instructions
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
points. Like before, log the average winner to the console.
5. Like before, change the scores to generate different winners, keeping in
mind there might be draws.
Submit the file to Hive.
 */
let gameA = 89,
  gameB = 120,
  gameC = 103;
let gameD = 116,
  gameE = 94,
  gameF = 123;
let gameG = 97,
  gameH = 134,
  gameI = 105;
function average(game1, game2, game3) {
  return (game1 + game2 + game3) / 3;
}
let averageJohn = {
  name: "john",
  averagePoints: average(gameA, gameB, gameC),
};
let averageMike = {
  name: "Mike",
  averagePoints: average(gameD, gameE, gameF),
};
let averageMary = {
  name: "Mary",
  averagePoints: average(gameG, gameH, gameI),
};
let namesArray = ["John", "Mike", "Mary"];
let pointsArray = [
  averageJohn.averagePoints,
  averageMike.averagePoints,
  averageMary.averagePoints,
];
let winner = {
  name: namesArray[pointsArray.indexOf(Math.max(...pointsArray))],
  points: Math.max(...pointsArray),
};
if (averageJohn.averagePoints > averageMike.averagePoints) {
  console.log(averageJohn);
} else if (averageMike.averagePoints > averageJohn.averagePoints) {
  console.log(averageMike);
} else {
  console.log("this is a draw");
}
