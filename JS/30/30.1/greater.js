const { promises } = require("fs");

function greaterThenTen(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(number);
    } else {
      reject("seriously? no way!");
    }
  });
}
greaterThenTen(5)
  .then((number) => console.log(`${number}`))
  .catch((reason) => console.log(`${reason}`));
