/*
NOTE 2: USING .then()

.then() is used to handle the successful result of a promise.
*/

function getNumber() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(10);
    }, 1000);
  });
}

console.log("Start");

getNumber().then(function (value) {
  console.log("Received value:", value);
});

console.log("End");

/*
Output order:
Start
End
Received value: 10

Why?
- Promise work finishes later
- .then() waits for the resolved value
*/
