/*
DOM3: textContent

What it does:
- Changes or reads only text
- HTML tags inside the string are not treated as real HTML
*/

const note = document.getElementById("note");

note.textContent = "<strong>textContent</strong> changes plain text only.";
