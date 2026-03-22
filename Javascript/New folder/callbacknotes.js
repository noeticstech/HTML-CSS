/*
CALLBACK NOTES

A callback is a function passed into another function.
That other function can run the callback later.

Simple meaning:
- We give a function as input to another function
- That function is called back when needed
*/

console.log("Example 1: Basic callback");

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function showResult(value) {
  console.log("Sum is:", value);
}

add(2, 3, showResult);

/*
Explanation:
1. add gets 2, 3, and showResult
2. add finds the result
3. add sends the result to showResult
4. showResult prints it
*/

console.log("");
console.log("Example 2: Callback with setTimeout");

console.log("Start");

setTimeout(function () {
  console.log("This runs later");
}, 1000);

console.log("End");

/*
Why use callbacks?
- To run code after some work is finished
- Very common in asynchronous JavaScript
- Used with timers, file work, API calls, and events
*/

console.log("");
console.log("Example 3: Real-life style example");

function downloadFile(fileName, callback) {
  console.log("Downloading", fileName);

  setTimeout(function () {
    console.log(fileName, "download complete");
    callback(fileName);
  }, 1000);
}

function openFile(fileName) {
  console.log("Opening", fileName);
}

downloadFile("notes.pdf", openFile);

/*
Important note:
Too many nested callbacks can make code hard to read.
That problem is called callback hell.

Next step after callbacks:
- Promises
- async/await
*/
