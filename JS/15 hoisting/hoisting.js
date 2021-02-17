//block 1:
/* function funcA() {
  var a = 1;
  console.log(a);
  console.log(foo());

  function foo() {
    return 2;
  }
}
funcA(); */ //possible problems: same var name. in the same scope - functions. lets check.

/* 
    notes before running: a is undefined, because only declerations and not initializations are hoisted to the top.
    - fix - declare and initialize at the head of the scope.
    now, lets check: indeed, a is undefined. that's the only problem.
    
  */
//block 2:
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//problems: none.
//my mistake! the problem is that it returns undefined, since it cannot access this.fullname. I hope to get a better explanation that doesn't colide with closures.
//thinking again: the function test has all the function get ful name, but not the related variables of the object, and so "this" now refers to nothing! so this.something is undefined.

//code 3:
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB(); //a is 1, b is 0. a now is gone because of scoping.
console.log(typeof a); //undefined.
console.log(typeof b); // number.
console.log(funcB()); //1!
//problems: b is not declared at all. without strickt mode, js lets you declare without var or let, as a global variable. lets check:
// scope: let: only block! no keyword: global! var: function global!
//
//block 4:

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//result: because hoisting takes the function declaration to the top of the page here, last was the one that returns 2, so that will always be the one called.

//block 5:

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  e = 1;
}
funcD2();
console.log(e); //e is only function scoped, so not available after the function. you can either call make it global, or return its value.

//mixup in the scope. the first will just work, and because d is global, it's value will remain. in funcD2 - I think it will be the same.
//check result: var is a function variable, so it's value it deleted after the function ends.  d however is totaly global, so its value stays.

//block 6:

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
console.log(funcE());

//notes: both should have it.
//result: for global scope - asigning f is not hoisted. so undefined.
// for local scope function: it is there. because it was called after f was asigned!
