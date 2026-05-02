/*
DOM9: value

What it does:
- Reads what the user typed in an input field
- Very useful in forms and search boxes
*/

const nameInput = document.getElementById("name-input");
const showButton = document.getElementById("show-btn");
const output = document.getElementById("output");

showButton.addEventListener("click", function () {
  output.textContent = "You typed: " + nameInput.value;
});
