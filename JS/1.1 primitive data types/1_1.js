console.log("it works");
var str = 'mos mos "mos"';
//using backtics for string is usefull because you can do this:
// this doesn't work!

str1 = `mos is
doing his
best`;

var num = 1243.2938;
const obj = {
  firstName: "ben",
  lastName: "tr",
  age: 33,
};
var bool = true;
var nothin = null;
var notYetDefined;

var sym2 = Symbol("foo");
var arr = [str, num, obj, bool, nothin, notYetDefined, sym2];

for (i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
}
