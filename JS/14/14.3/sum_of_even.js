function getSumOfEven(arr) {
  debugger;
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* 
I saw in the debugger that the return value was a NAN. 
so I looked over the calls, and saw that arr[10] is outside the array scope.
*/
