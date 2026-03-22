/*
PROMISE NOTES

A Promise is used for asynchronous work.
It represents a value that will come later.

Three states:
- pending
- fulfilled
- rejected
*/

console.log("Example 1: Basic promise");

const basicPromise = new Promise(function (resolve, reject) {
  const success = true;

  setTimeout(function () {
    if (success) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

basicPromise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("");
console.log("Example 2: Promise with returned value");

function getUserName() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Vaibhav");
    }, 1000);
  });
}

getUserName().then(function (name) {
  console.log("User name is:", name);
});

console.log("");
console.log("Example 3: Chaining");

function getNumber() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(10);
    }, 1000);
  });
}

getNumber()
  .then(function (value) {
    console.log("First value:", value);
    return value * 2;
  })
  .then(function (newValue) {
    console.log("Second value:", newValue);
  });

/*
Why promises are better than many callbacks:
- code is easier to read
- error handling is cleaner
- chaining is easier

Next step after promises:
- async/await
*/
