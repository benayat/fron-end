// result = prompt("How many siblings do you have?");
// if (result == "1") {
//   console.log("1 sibling");
// } else if (result > 1) {
//   console.log("More  than one sibling");
// } else {
//   console.log("no siblings");
// }

// again, now with ===
let result = prompt("How many siblings do you have?");
// converting to a number:
let numOfSiblings = parseInt(result);
if (numOfSiblings === 1) {
  console.log("1 sibling");
} else if (numOfSiblings > 1) {
  console.log("More  than one sibling");
} else {
  console.log("no siblings");
}
/* 
reflection: 
why did this happen? 
- prompt returns a string. not a number. but JS == operator, also comares strings to numbers. that's why it worked with "==" operator.
- === is a more strict comparison. it only returns true in case of both type and value are equal.
*/
