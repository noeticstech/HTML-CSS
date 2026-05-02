/*
DOM7: createElement()

What it does:
- Creates a new HTML element in JavaScript
- After creating it, we can add text and place it on the page
*/

const addItemButton = document.getElementById("add-item-btn");
const taskList = document.getElementById("task-list");
let itemNumber = 2;

addItemButton.addEventListener("click", function () {
  const newItem = document.createElement("li");

  newItem.textContent = "New item " + itemNumber;
  taskList.appendChild(newItem);

  itemNumber += 1;
});
