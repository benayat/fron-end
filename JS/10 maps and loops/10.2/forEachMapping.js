// let array = [1, 4, 7, 3, 2];
// function doubleValues(numbersArray) {
//   return numbersArray.map((x) => x * 2);
// }

// console.log(doubleValues(array));

// function onlyEvenValues(numbersArray) {
//   const evenArray = [];
//   numbersArray.forEach(function (currentValue) {
//     currentValue % 2 === 0 && this.push(currentValue);
//   }, evenArray);
//   return evenArray;
// }

// console.log(onlyEvenValues(array));

function showFirstAndLast(stringArray) {
  const firstAndLast = [];
  stringArray.forEach(function (currentValue, index, array) {
    (index == 0 || index === array.length - 1) &&
      typeof currentValue === "string" &&
      this.push(currentValue);
  }, firstAndLast);
  return firstAndLast;
}
let testStringArray = ["string1", 2, "string2", 3, "another one"];
console.log(showFirstAndLast(testStringArray));

function vowelCount(str) {
  const tempStrObj = {};
  str.split("").forEach(function (currentValue) {
    if (/[aeiou]/.test(currentValue)) {
      console.log(currentValue);
      this[currentValue] = (this[currentValue] || 0) + 1;
    }
  }, tempStrObj);
  return tempStrObj;
}
let str = "check for vowels ooo eee";

console.log(vowelCount(str));

function capitalize(str) {
  return str
    .split(" ")
    .map((value) => value.charAt(0).toUpperCase().concat(value.slice(1)))
    .join(" ");
}
console.log(capitalize(str));

function shiftLetters(str) {
  return str
    .split("")
    .map(
      (c) => (/[b-z]/.test(c) && String.fromCharCode(c.charCodeAt(0) - 1)) || c
    )
    .join("");
}
str = "aaa bbb aacc";
console.log(shiftLetters(str));
str = "this is a good thing";
function swapCase(str) {
  return str
    .split(" ")
    .map((value, index) => (index % 2 == 1 && capitalize(value)) || value);
}
console.log(swapCase(str));
