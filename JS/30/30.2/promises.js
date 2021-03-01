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
    arrayOfWords.sort();
    resolve(arrayOfWords);
  });
}
function handleError(message) {
  console.log(message);
}
function printArray(array) {
  console.log(array);
}
const arrayBroken = ["I", "am", "not", "a", "word"];

makeAllCaps(arrayBroken).then(sortWords).then(printArray).catch(handleError);
