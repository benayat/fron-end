const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
console.log(data);
function getNames(array) {
  return array.map((object) => object.name);
}
console.log(getNames(data));

function younger(array) {
  return array.filter((value) => value.birthday.slice(-4) < 1990);
}
console.log(younger(data));

function arrangeFoods(data) {
  return data
    .map((object) => [
      ...object.favoriteFoods.meats,
      ...object.favoriteFoods.fish,
    ])
    .reduce((accumulatorArray, currentValue) => {
      accumulatorArray = [...accumulatorArray, ...currentValue];
      return accumulatorArray;
    }, [])
    .reduce(
      (accumulatorObject, currentValue) =>
        (accumulatorObject[currentValue] =
          (accumulatorObject[currentValue] || 0) + 1)
    );
}
console.log(arrangeFoods(data));
const array = data
  .map((object) => [
    ...object.favoriteFoods.meats,
    ...object.favoriteFoods.fish,
  ])
  .reduce((arrayAccumulator, currentValue) => [
    ...arrayAccumulator,
    ...currentValue,
  ])
  .reduce((accumulatorObject, currentValue) => {
    accumulatorObject[currentValue] =
      (accumulatorObject[currentValue] || 0) + 1;
    return accumulatorObject;
  }, {});
console.log(array);
