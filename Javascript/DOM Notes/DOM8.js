/*
DOM8: remove()

What it does:
- Deletes an element from the DOM
- Once removed, that element is no longer shown on the page
*/

const card = document.getElementById("card");
const removeButton = document.getElementById("remove-btn");
const status = document.getElementById("status");

removeButton.addEventListener("click", function () {
  card.remove();
  status.textContent = "The card has been removed from the page.";
  removeButton.disabled = true;
});
