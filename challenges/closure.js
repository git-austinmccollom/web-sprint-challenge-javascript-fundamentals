// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the 
variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
The nestedFunction can access the "internal" because the variable is in the nestedFunction's parent 
function and outer scope. Another way of saying it is that "internal" is in nestedFunction's closure.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the
 summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = function(positiveInteger) {
  let accumulator = 0;
  for ( let i = 0; i <= positiveInteger; i++ ) {
    accumulator += i;
  }
  return accumulator;
}

console.log(summation(4));
console.log(summation(6));