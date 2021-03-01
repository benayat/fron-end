const { resolve } = require("path");

function makeAllCaps(arrayOfWords) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrayOfWords.length; i++) {
      if (typeof arrayOfWords[i] !== "string") reject("invalid input");
      arrayOfWords[i] =
        arrayOfWords[i].charAt(0).toUpperCase() +
        arrayOfWords[i].split("").slice(1).join("");
    }
    resolve(arrayOfWords);
  });
}

function sortWords(arrayOfWords) {
  return new Promise((resolve, reject) => {
    console.log("sorting");
    arrayOfWords.sort();
    resolve(arrayOfWords);
  });
}
const array = ["want", "I", "this"];
const arrayBroken = ["I", "am", "not", "a", "word", 2384];

makeAllCaps(arrayBroken)
  .then((array) => sortWords(array))
  .then((array) => console.log(array))
  .catch((error) => console.log(error));
