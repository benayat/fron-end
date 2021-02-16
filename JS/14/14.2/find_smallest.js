function findSmallest(a, b, c) {
  debugger;
  if (a > c && b > c) {
    return c;
  } else if (a > b && c > b) {
    return b;
  } else {
    return a;
  }
}
findSmallest(52, 66, 2);

/* 
error: in line 11, find smalest is not defined - and that's because it has only one l.
found it with the console, which pointed me to the line 11, and the problem.
*/
/* 
eventually I just used the debugger to follow the value of the function - I used watch on the values I needed, and that's it. alot of mistakes this time. 
*/
