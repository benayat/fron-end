function swap(obj) {
  let newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }
  return newObj;
}

objTest = {
  name: "mos",
  occupation: "programmer",
};
console.log(swap(objTest));
