/* still didn't understand well!!! */
let justArray = new Array(100).fill({ points: 0 });
let array2 = Array.from(new Array(100), (x, i) => i);
// or this: Array.from(Array(100).keys());
// or : [...Array[100].keys()];
console.log(array2);
let array3 = Object.values({ name: "moss", number: "2", likes: "food" });

console.log(array3);
const obj = array3.reduce(function (accumulator, curerntValue, index) {
  return index == 0 ? accumulator : accumulator + ", " + curerntValue;
});
console.log(obj);
// a simpler way is to just use join, if we're talking about an array.
//explanation: reduce gets a function as a parameter, with three values: prevval, currentVal, takes the current value, and adds ", " to it.

//to check if an object is an array:
console.log(array3);
console.log(Array.isArray(array3));
const clone = [...array3];
console.log(clone);
const removedElement = clone.shift();
console.log(clone);
console.log(array3);
clone.unshift(removedElement);
console.log(clone);
const cloneMutable = array3;
cloneMutable.pop();
console.log(array3);
