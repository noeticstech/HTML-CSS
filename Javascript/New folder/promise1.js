/*
NOTE 1: PROMISE BASICS

A Promise is an object that represents the result of future work.

Promise states:
- pending
- fulfilled
- rejected

Think like this:
- pending -> work is still happening
- fulfilled -> work finished successfully
- rejected -> work failed
*/

const myPromise = new Promise(function (resolve, reject) {
  const success = true;

  setTimeout(function () {
    if (success) {
      resolve("Work completed");
    } else {
      reject("Work failed");
    }
  }, 1000);
});

console.log("Promise created");

myPromise.then(function (message) {
  console.log(message);
});

/*
Important:
- resolve sends success data
- reject sends error or failure data
- .then() runs when the promise is fulfilled
*/
