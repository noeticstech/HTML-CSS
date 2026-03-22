/*
NOTE: ASYNC AND AWAIT

Think of it like this:
- async tells JavaScript: this function will work with Promises
- await tells JavaScript: wait here until the Promise gives a result
- await can only be used inside an async function

Simple idea:
- async = Promise returning function
- await = wait for the Promise result
*/

function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Fetching started");

  const result = await getData();

  console.log("Result:", result);
  console.log("Fetching finished");
}

console.log("Before function call");
fetchData();
console.log("After function call");

/*
How this code flows:

1. We define getData, but it does not run yet.
2. We define fetchData, but it also does not run yet.
3. "Before function call" prints first.
4. fetchData() is called.
5. Inside fetchData, "Fetching started" prints.
6. await getData() now calls getData().
7. getData creates a Promise and starts the 2 second timer.
8. await pauses only fetchData here. It does not block the whole program.
9. So "After function call" prints while fetchData is waiting.
10. After 2 seconds, the Promise resolves with "Data received".
11. That value is stored in result.
12. Then "Result: Data received" prints.
13. Finally, "Fetching finished" prints.

Output order:
Before function call
Fetching started
After function call
Result: Data received
Fetching finished

Friendly comparison:
- .then() handles the Promise outside
- await handles the Promise inside the async function

Why people like async/await:
- it looks more like normal step-by-step code
- it is easier to read than long .then() chains
*/
