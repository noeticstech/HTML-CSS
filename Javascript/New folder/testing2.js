function checkNumber(num) {
  if (num > 10) {
    return Promise.resolve("Number is valid");
  } else {
    return Promise.reject("Number is too small");
  }
}

checkNumber(5)
  .then(function (message) {
    console.log("Success:", message);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
