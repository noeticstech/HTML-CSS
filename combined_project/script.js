/*
  This file intentionally uses the DOM methods from your notes:
  - getElementById()
  - querySelector()
  - textContent
  - innerHTML
  - style
  - addEventListener()
  - createElement()
  - remove()
  - value
*/

/* getElementById():
   Select one element by its id. */
const mainTitle = document.getElementById("main-title");
const introText = document.getElementById("intro-text");
const form = document.getElementById("study-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const citySelect = document.getElementById("city");
const output = document.getElementById("output");
const result = document.getElementById("result");
const htmlBox = document.getElementById("html-box");
const styleBox = document.getElementById("style-box");
const countText = document.getElementById("count-text");
const taskList = document.getElementById("task-list");
const addItemButton = document.getElementById("add-item-btn");
const removeButton = document.getElementById("remove-btn");
const plannerCard = document.getElementById("planner-card");
const footerNote = document.getElementById("footer-note");

/* querySelector():
   Select the first element that matches a CSS selector. */
const firstTopic = document.querySelector(".topic");

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewTrack = document.getElementById("preview-track");
const previewCity = document.getElementById("preview-city");

let clickCount = 0;
let itemNumber = 3;

/* textContent:
   Changes plain text only. */
mainTitle.textContent = "Web Dev Learning Hub";
introText.textContent =
  "This page is a different project that demonstrates the concepts from your notes in one place.";

if (firstTopic) {
  result.textContent =
    "querySelector('.topic') found the first task: " + firstTopic.textContent;
}

/* innerHTML:
   Adds real HTML inside an element. */
htmlBox.innerHTML =
  "<strong>innerHTML</strong> is being used here to show formatted HTML content inside this box.";

/* style:
   Changes inline CSS using JavaScript. */
styleBox.style.backgroundColor = "#dbeafe";
styleBox.style.color = "#1e3a8a";
styleBox.style.padding = "16px";
styleBox.style.border = "2px solid #60a5fa";
styleBox.style.borderRadius = "12px";
styleBox.textContent =
  "JavaScript added inline styles to this box using element.style.";

function getCheckedTrack() {
  const activeTrack = document.querySelector('input[name="track"]:checked');
  return activeTrack ? activeTrack.parentElement.textContent.trim() : "No track";
}

function updatePreview() {
  /* value:
     Reads what the user typed or selected. */
  previewName.textContent = nameInput.value || "Not saved yet";
  previewEmail.textContent = emailInput.value || "Not saved yet";
  previewTrack.textContent = getCheckedTrack();
  previewCity.textContent = citySelect.value;
}

/* addEventListener():
   Runs a function when an event happens. */
nameInput.addEventListener("input", updatePreview);
emailInput.addEventListener("input", updatePreview);
citySelect.addEventListener("change", updatePreview);

document
  .querySelectorAll('input[name="track"]')
  .forEach(function (radioInput) {
    radioInput.addEventListener("change", updatePreview);
  });

document.getElementById("show-btn").addEventListener("click", function () {
  clickCount += 1;
  countText.textContent = "Button clicks: " + clickCount;
  output.textContent = "You typed: " + nameInput.value;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updatePreview();

  output.textContent =
    "Plan saved for " + nameInput.value + " from " + citySelect.value + ".";

  footerNote.textContent =
    "Latest saved plan belongs to " + (nameInput.value || "a student") + ".";
});

addItemButton.addEventListener("click", function () {
  /* createElement():
     Creates a new HTML element from JavaScript. */
  const newItem = document.createElement("li");

  newItem.textContent = "Practice task " + itemNumber + " for " + getCheckedTrack();
  taskList.appendChild(newItem);
  itemNumber += 1;
});

removeButton.addEventListener("click", function () {
  /* remove():
     Deletes an element from the page. */
  plannerCard.remove();
  result.textContent = "The planner card has been removed from the page.";
  footerNote.textContent =
    "The planner section was removed using the remove() method.";
});

updatePreview();
