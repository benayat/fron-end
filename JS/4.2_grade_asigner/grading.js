/* 
Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A
*/
function grades(number) {
  if (number >= 0 && number <= 64) {
    return "F";
  } else if (number > 64 && number <= 69) {
    return "D";
  } else if (number > 69 && number <= 79) {
    return "C";
  } else if (number > 79 && number <= 89) {
    return "B";
  } else {
    return "A";
  }
}
