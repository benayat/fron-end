// a - array of words.
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log(foods.sort((a, b) => a.localeCompare(b)));
console.log(foods.sort((a, b) => b.localeCompare(a)));
// b - sorting with uppercase
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
console.log(
  foodsWithUpperCase.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  )
);
console.log(
  foodsWithUpperCase.sort((a, b) =>
    b.localeCompare(a, "en", { sensitivity: "base" })
  )
);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => b.length - a.length));
