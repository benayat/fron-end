function func(language) {
  let result = "";
  switch (language) {
    case "mandarin":
      result = "MOST number of native speakers";
      break;
    case "spanish":
      result = "2nd place in number of native speakers";
      break;
    case "english":
      result = "3rd place";
      break;
    case "hindi":
      result = "Number 4";
      break;
    case "arabic":
      result = "4th most spoken language";
      break;
    default:
      result = "not in top 5";
  }
  console.log(result);
  return result;
}
let language1 = "hebrew",
  language2 = "arabic";
console.log(`hebrew is ${func(language1)} and arabic is ${func(language2)}`);
