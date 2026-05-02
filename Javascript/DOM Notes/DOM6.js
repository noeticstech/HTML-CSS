/*
DOM6: addEventListener()

What it does:
- Listens for an event like click, input, submit, or mouseover
- Runs a function when that event happens
*/

const counterButton = document.getElementById("counter-btn");
const countText = document.getElementById("count-text");
let count = 0;

counterButton.addEventListener("click", function () {
  count += 1;
  countText.textContent = "Button clicks: " + count;
});
