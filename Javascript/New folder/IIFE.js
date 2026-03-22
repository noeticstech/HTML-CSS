/*
NOTE: IIFE

IIFE means:
Immediately Invoked Function Expression

Simple meaning:
- we create a function
- and we run it immediately

Why use it?
- to run code only once
- to create a private scope
- to avoid polluting the global scope
*/

(function () {
  console.log("I run immediately");
})();

/*
How to read it:

1. We write a function inside parentheses:
   (function () { ... })

2. Then we add another pair of parentheses:
   ()

3. Those last parentheses call the function immediately

So this:
(function () {
  console.log("I run immediately");
})();

means:
"Create this function and run it right now"

Important:
- normal function:
  function test() {
    console.log("Hello");
  }
  test();

- IIFE:
  (function () {
    console.log("Hello");
  })();

Difference:
- normal function is created first and called later
- IIFE is created and called at the same time

One more example:
*/

(function (name) {
  console.log("Hello", name);
})("Vaibhav");

/*
Output:
I run immediately
Hello Vaibhav

Friendly idea:
- IIFE is useful when you want some code to run only once immediately
- it was used a lot before let, const, and modules became common
*/
