people = ["Greg", "Mary", "Devon", "James"];
/* for (const person of people) {
  console.log(person);
} */
//mutable. removes first item from the array.
people.shift();
people.pop();
people.unshift("Matt");
people.push("Benaya");
for (const person of people) {
  console.log(person);
  if (person === "Mary") break;
}
let shallowCopy = people.slice(2, 4);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];

/* 
 parameters: index, how many elements to replace\remove, and then all the elements to add instead them.

 */
people.splice(2, 1, "Elizabeth", "Artie");

//just saying - it only returns a String and puts "," between array values as a default.
let withBob = people + "BoB";

console.log(people);
console.log(withBob);
