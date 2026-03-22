/*
NOTE 1: CALLBACK BASICS

A callback is a function that is passed into another function as an argument.
The outer function can call that callback whenever it wants.

Simple idea:
- Passing a value: add(2, 3)
- Passing a function: add(2, 3, showResult)

Important:
- showResult(result) -> normal function call
- add(2, 3, showResult) -> showResult is used as a callback
*/

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function showResult(value) {
  console.log("The result is:", value);
}

add(2, 3, showResult);

/*
Flow:
1. add receives 2, 3, and showResult
2. add calculates the sum
3. add sends the sum to the callback
4. showResult prints the value
*/
