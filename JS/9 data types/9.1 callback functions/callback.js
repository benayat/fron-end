function log(str) {
  console.log(str);
}
function isString(str, callback) {
  if (typeof str == "string") callback(str);
}
isString("moss", log);
isString(1232, log);

function addDashes(str) {
  console.log(str);
  return str.split(" ").join("-");
}
function callbackExample(str) {
  return str.concat("it works");
}

function firstWordUpperCase(str, callback) {
  let strArray = str.split(" ");
  let firstWord = strArray.shift().toUpperCase();
  strArray.unshift(firstWord);
  return callback(strArray.join(" "));
}
console.log(firstWordUpperCase("this is just a sentense", addDashes));
console.log(firstWordUpperCase("this is just a sentense", callbackExample));

function callbackSum(accumulator, value) {
  return (accumulator += value);
}

// calculate the sum of the first 100 elements of a geometric series.
function calculate_geometric_series_sum(base, q) {
  seriesArray = [base];
  for (let i = 1; i < 100; i++) {
    seriesArray[i] = base * Math.pow(q, i);
  }
  return seriesArray.reduce(callbackSum, 0);
}
console.log(calculate_geometric_series_sum(5, 2));
