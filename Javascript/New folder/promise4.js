/*
NOTE 4: PROMISE CHAINING

Promise chaining means using one .then() after another.
This is useful when the next step depends on the previous step.
*/

function firstStep() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 1 complete");
      resolve(5);
    }, 500);
  });
}

firstStep()
  .then(function (value) {
    console.log("Value from step 1:", value);
    return value * 2;
  })
  .then(function (newValue) {
    console.log("Value after step 2:", newValue);
    return newValue + 3;
  })
  .then(function (finalValue) {
    console.log("Final value:", finalValue);
  });

/*
Why chaining is useful:
- code stays flatter than nested callbacks
- each .then() handles one step
- easier to read than callback hell
*/
