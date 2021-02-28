/* 
1. "this" depends on the scope\context it was called from.
if just from the screen, the default "this" will be the window.

2.a. this will point to the object it was called from.
2.b. we have a few options:change this to the object name, or we can use bind\call\apply to call the function with the desired this. first fix here: 

3. to the global variable, because that's the context it was called from, and the function is stored in the global context.
4. unlike 3, here the arrow functions doesn't have any binding to a this, so I expect it to be the window again, but from different reasons. 
note: the behaviour is undefined, because it produces diferent results from codepen and from node vscode. {} or global object. maybe because it was saved eventually in the variable.

5. a. if it wasnt an arrow function I would expect it to be the event target. since it doesn't, I think it would be the global object
b. it needs an event type => ("click", ()=>{}) and to make this meaningfull - ("click", handler);
6. 

*/
//2
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${myObj.name}`);
//   },
// };
// myObj.greet();
//3
// const myFuncDec = function () {
//   console.log(this);
// };
// myFuncDec();

//4
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

//5
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
