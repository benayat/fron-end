let obj1 = {};

// const maxCount = 1000000;
// console.time("My operation"); // <---- Starts the timer
// for (let i = 0; i < maxCount; i++) {
//   obj1[i] = { i: `value${i}` };
// }
// console.timeEnd("My operation"); // <---- Stops the time

const myMap = new Map();

const maxCount = 1000000;
// console.time("My operation"); // <---- Starts the timer
// for (let i = 0; i < maxCount; i++) {
//   myMap[i] = { i: `value${i}` };

// }
// console.timeEnd("My operation"); // <---- Stops the time

/* 
not that big of a difference!
340 for object, vs 361 of map!
maybe the way I add it makes a difference...lets see:
*/
console.time("My operation"); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  myMap.set(i, "key");
  //Perform the operation to be measured multiple times
}
console.timeEnd("My operation"); // <---- Stops the time

// and....wow!!! when I used the predefined "set" method, it simply went down 90%!!
// only 14.59ms! now, lets check on the object if there is a better way:
console.time("My operation"); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  obj1.i = i;
  //Perform the operation to be measured multiple times
}
console.timeEnd("My operation"); // <---- Stops the time

// and... object is even faster. so I think the issue here is more the way you implement and less about the collection you use.
