/*
DOM2: querySelector()

What it does:
- Selects the first element that matches a CSS selector
- You can use selectors like #id, .class, tag names, and more
*/

const firstTopic = document.querySelector(".topic");
const result = document.getElementById("result");

console.log("Selected element with querySelector:", firstTopic);

result.textContent =
  "querySelector('.topic') selected the first list item: " + firstTopic.textContent;
