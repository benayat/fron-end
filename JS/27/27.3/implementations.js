let array = [1, 2, 4, 5, 6, 7, 8, 8, 5, 4, 3, 2, 2, 323, 356, 7567, 7];
Array.prototype.filterNew = function (callback, thisArg = false) {
  let newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

Array.prototype.findNew = function (callback, thisArg = false) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

Array.prototype.reduceNew = function (reduceFunction, initialValue = false) {
  let accumulator = initialValue ? initialValue : undefined;
  for (let i = 0; i < this.length; i += 1) {
    accumulator = callback(accumulator, currentValue, index, array);
  }
  return accumulator;
};

//*not there yet!!
// need to get back to this.
//if the accumulator is undefined, we call the function with
Array.prototype.myReduce = function (callback, initialVal) {
  let accumulator = initialVal === undefined ? undefined : initialVal;

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};

function reducer(accumulator, currentValue, index = false, array = false) {}
function greaterThen300(value, index = false, array = false) {
  return value > 300;
}

console.log(array.filterNew(greaterThen300));
console.log(array.findNew(greaterThen300));
