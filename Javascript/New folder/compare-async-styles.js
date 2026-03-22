/*
NOTE: CALLBACK VS PROMISE VS ASYNC/AWAIT

All 3 are used to handle work that finishes later.

Examples:
- setTimeout
- API call
- file read
- database work

Simple difference:
- Callback: pass a function to run later
- Promise: return a Promise and use .then() / .catch()
- async/await: write Promise code in a cleaner step-by-step way
*/

console.log("CALLBACK EXAMPLE");

function getDataWithCallback(callback) {
  console.log("Callback: fetching data...");

  setTimeout(function () {
    callback("Callback data received");
  }, 1000);
}

getDataWithCallback(function (message) {
  console.log(message);
});

/*
How callback works:
- we give a function as input
- when the work is finished, that function is called
- simple, but too many nested callbacks can become messy
*/

console.log("");
console.log("PROMISE EXAMPLE");

function getDataWithPromise() {
  console.log("Promise: fetching data...");

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise data received");
    }, 2000);
  });
}

getDataWithPromise().then(function (message) {
  console.log(message);
});

/*
How Promise works:
- the function returns a Promise object
- at first that Promise is pending
- later it becomes fulfilled or rejected
- .then() gets the success value
- .catch() gets the error value
*/

console.log("");
console.log("ASYNC/AWAIT EXAMPLE");

function getDataWithAwait() {
  console.log("Async/Await: fetching data...");

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Async/Await data received");
    }, 3000);
  });
}

async function showData() {
  const result = await getDataWithAwait();
  console.log(result);
}

showData();

/*
How async/await works:
- async function always returns a Promise
- await waits for a Promise result
- it makes Promise code look easier to read
- behind the scenes, it is still Promise-based
*/

/*
MAIN DIFFERENCE IN CODE STYLE

1. Callback style:
getData(function (value) {
  console.log(value);
});

2. Promise style:
getData().then(function (value) {
  console.log(value);
});

3. async/await style:
const value = await getData();
console.log(value);
*/

/*
WHEN THEY ARE USED

- Callback:
  Often used in events, old JavaScript code, and simple timer examples

- Promise:
  Used when a function gives a future result and we want better error handling

- async/await:
  Used when we want Promise code to look cleaner and more step-by-step
*/

/*
IMPORTANT QUESTION:
"Is there pending in all of them?"

- In callbacks, we usually do not talk about a "pending state" object
  We just say the work is still going on, and later the callback runs.

- In Promises, there is a real pending state:
  pending -> fulfilled or rejected

- In async/await, there is also a Promise behind the scenes
  So yes, pending still exists there too.
  await is just waiting for that Promise to finish.
*/

/*
IMPORTANT QUESTION:
"Is it calling things one after another, or is it parallel?"

Answer:
- JavaScript starts the async work
- then it keeps moving unless you attach logic that waits for the result

Example:
- setTimeout starts and finishes later
- Promise starts and stays pending
- await pauses only that async function, not the whole program

So usually:
- JavaScript is not running everything in true parallel like many CPU threads
- it is handling delayed work without blocking the main flow
*/

/*
SEQUENTIAL EXAMPLE
This means: wait for first work, then start second work

async function runOneByOne() {
  const a = await firstTask();
  const b = await secondTask();
}

Here secondTask waits for firstTask to finish.
*/

/*
PARALLEL-LIKE EXAMPLE
This means: start both tasks first, then wait for both

const p1 = firstTask();
const p2 = secondTask();

const result1 = await p1;
const result2 = await p2;

Here both tasks start earlier, so waiting time can overlap.
*/

/*
FINAL IDEA

- Callback = older way, can become hard to read
- Promise = cleaner than callback, has pending/fulfilled/rejected
- async/await = cleanest style for many cases, built on Promises

Most modern JavaScript prefers:
Promises + async/await
*/
