const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  rl.question("What is your age? ", (age) => {
    rl.question("What is your favorite color? ", (color) => {
      console.log(`${name} is ${age} years old and has ${color} as their favorite color.`);
      rl.close();
    });
  });
});
