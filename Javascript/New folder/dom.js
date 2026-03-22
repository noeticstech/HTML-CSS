/*
NOTE: DOM

DOM means:
Document Object Model

Simple meaning:
- when a webpage is loaded, the browser turns the HTML into objects
- JavaScript can use those objects to read, change, add, or remove things

Think like this:
- HTML gives structure
- CSS gives style
- JavaScript uses DOM to control the page
*/

/*
Example HTML:

<h1 id="title">Hello</h1>
<button id="btn">Click me</button>
*/

/*
How to select elements:
*/

const title = document.getElementById("title");
const button = document.getElementById("btn");

console.log(title);
console.log(button);

/*
What these lines do:

1. document means the full webpage
2. getElementById("title") finds the element whose id is title
3. getElementById("btn") finds the button
4. now JavaScript can work with those elements
*/

/*
How to change text:
*/

title.textContent = "Welcome to DOM";

/*
This changes:
Hello

into:
Welcome to DOM
*/

/*
How to respond to a click:
*/

button.addEventListener("click", function () {
  title.textContent = "Button clicked";
});

/*
What happens here:

1. JavaScript listens for a click on the button
2. when the button is clicked, the function runs
3. inside that function, the title text is changed
*/

/*
Important DOM things:

- document.getElementById() -> select by id
- textContent -> change text
- innerHTML -> change HTML inside an element
- style -> change inline CSS
- addEventListener() -> listen for events like click
*/

/*
Friendly idea:
- DOM is the bridge between JavaScript and the webpage
- if you want to change something on the screen, you usually use DOM
*/
