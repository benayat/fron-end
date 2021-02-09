function lengthOfWords(strings) {
  const lengths = [];
  for (let i = 0; i < strings.length; i += 1) {
    lengths.push(strings[i].length);
  }
  return lengths;
}
const strings = ["boo", "doooo", "ro"];
console.log(lengthOfWords(strings));
