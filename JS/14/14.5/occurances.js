function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  debugger;
  return counter;
}
countOccurrences("ini mini miny moe", "n");

/* 
the debugger shows that the counter is 0, so it's not actually counting.
so I just saw that counter+1 doesn't change the value of counter, so I fixed it to counter+=1;
*/
