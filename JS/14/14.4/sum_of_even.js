function calcAverage(arr) {
  var sum = 0;
  debugger;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);

/* 
first, no problems appear in console, so I'll check the return value.
- inside the function, before the return - I notice that sum is not a number, and that's probabely because it wasn't initialized. 
- I initizlized the value of sum to 0. 
that's it!
---
- one last important thing - the function name is calcAverage, but it actually calculates sum. 
so I changed it to something more reasonable. 
*/
