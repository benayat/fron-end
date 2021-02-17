//block 1:
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  var b = 5;
  return otherFunction;
}
//var firstResult = someFunction(9);
var firstResult = someFunction(9);
var result = firstResult(2);
//notes: two options: either b is var on top, which is 1, because we go up, or b is the global 5, which is inside.
//lets explain: when asigning someFunction to firstResult, it got back the return function+it's evnironment. which means, that it has the local var b =5.  and when result is called, b will be always 5.

//block 2

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); //I think 1.

//here a =1, because the inner a is not available anymore - because the function result is not saved to any variable.

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//timeout: after carefully looking - when looping, it sets a timeout each iteration, but what it does is only asigning the function to const log, and after that set a timer for when to activate function. so in the 100ms that passed, the loop already finished, but the calls are still there - and the i value is 3 of course.
