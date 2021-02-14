let obj1 = {
  name: "Mos",
};
let obj2 = {
  name: "Jonas",
};
let obj3 = {
  name: "Wes",
};
let myMap = new Map();
myMap.set(obj1, 1);
myMap.set(obj2, 2);
myMap.set(obj3, 3);

for (objectSet of myMap) {
  console.log(`key: ${objectSet[0].name}\nvalue: ${objectSet[1]}`);
}
