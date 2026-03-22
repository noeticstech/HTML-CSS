/*
NOTE 3: USING .catch() AND .finally()

.catch() handles errors
.finally() runs no matter what happens
*/

function checkAge(age) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (age >= 18) {
        resolve("You can vote");
      } else {
        reject("You are too young to vote");
      }
    }, 1000);
  });
}

checkAge(16)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log("Error:", error);
  })
  .finally(function () {
    console.log("Age check finished");
  });

/*
Use this pattern when:
- success and failure are both possible
- you want clean error handling
*/
