const myPromise = new Promise(function (res, rej) {
  const success = true;

  setTimeout(function () {
    if (success) {
      res("Work completed");
    } else {
      rej("Work failed");
    }
  }, 1000);
});

console.log("Promise created");

myPromise
  .then(function (message) {
    console.log("Success:", message);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
console.log(myPromise);
