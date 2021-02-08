/* Instructions
Write a function that takes one argument n, an integer.
Print out all the numbers between 1 to n.
If the number is only divisible by 7 print “BOOM”
If the number is divisible by 7 and also includes the digit 7 print “BOOMBOOM”
If either of the above cases print the number.
Example of numbers between 1 to 18:
1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18 */

function calculateSeven(num) {
  let result = "";
  for (let i = 1; i <= num; i += 1) {
    if (i % 7 === 0 && i.toString().search("7") > -1) {
      result = result.concat("BOOM-BOOM,");
      //        console.log("BOOM, ");
    } else if (i % 7 === 0) {
      result = result.concat("BOOM,");
    } else {
      result = result.concat(i + ",");
    }
    //        console.log(i+", ");
  }
  return result;
}

console.log(calculateSeven(18));

//edit: I could just use console log each iteration, but in the excersice the output was put in a single line -
// which is why I changed it to one long string.
