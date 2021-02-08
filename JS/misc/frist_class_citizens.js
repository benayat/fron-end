//! Functions in JavaScript are first class citizens(Objects)
//! They behave just like objects!

//* You can assign them to variables
const myObj = {};
const myFunc = function () {
  return "hello";
};

//* You can pass them to arrays
const myArray = [];
myArray.push(myObj);
myArray.push(myFunc);
console.log(myArray);

//* You can pass them a new property
//! but you will most likely never do this
myObj.newProperty = "value";
myFunc.ninja = "hello";

//* You can return a new function
function myNewFunc() {
  return {};
}
function myNewFunc1() {
  return function () {
    return "hello";
  };
}
const x = myNewFunc1();
console.log(x);
console.log(x());
// console.log(myNewFunc1());
//* You can pass them as arguments to a function
function otherFunc() {
  return "hello";
}
function myOtherFunc(fn) {
  console.log(fn);
}

myOtherFunc(otherFunc);

//! Callbacks
function average(result, length) {
  return result / length;
}
function addition(num1, num2, num3, callback) {
  const length = arguments.length - 1;
  const result = num1 + num2 + num3;
  return callback(result, length);
}
console.log(addition(1, 2, 3, average));

let xxx = function () {
  return "hello";
};
function y() {
  return "hello";
}
