const reducer = (histogram, key) => {
  histogram[key] = (histogram[key] || 0) + 1;
  return histogram;
};
function count(array) {
  return array
    .join("")
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reduce(reducer, {});
}

const array = [
  "Hello",
  "Go    od Day",
  "You r Wel  com e",
  "hotdog",
  "hamburgers",
];

console.log(count(array));
