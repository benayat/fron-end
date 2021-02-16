const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
function compare(array1, array2) {
  let str = "";
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        str = str.concat(" ", array1[i]);
      }
    }
  }
  return str;
}
console.log(compare(food, food1));
