/*
DOM4: innerHTML

What it does:
- Adds HTML inside an element
- The string can contain tags like <strong>, <em>, <ul>, and more
*/

const htmlBox = document.getElementById("html-box");

htmlBox.innerHTML =
  "<strong>innerHTML</strong> can create <em>real HTML</em> inside an element.";
