/*
DOM1: getElementById()

What it does:
- Finds one element by its id
- id should be unique in the page
*/

const mainTitle = document.getElementById("main-title");
const details = document.getElementById("details");

console.log("Selected element with getElementById:", mainTitle);

details.textContent =
  "JavaScript found the element whose id is 'main-title'. Check the console too.";
