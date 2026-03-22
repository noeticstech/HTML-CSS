/*
NOTE 2: CALLBACKS WITH setTimeout

Callbacks are very common in asynchronous JavaScript.
Asynchronous means "do this work later, not right now".

setTimeout needs a callback.
It waits for some time and then runs the function you pass to it.
*/

console.log("Start");

setTimeout(function printMiddle() {
  console.log("Middle");
}, 0);

console.log("End");

/*
Expected output:
Start
End
Middle

Why?
- JavaScript first finishes the normal lines.
- After that, it runs the callback from setTimeout.
- Even 0 milliseconds does not mean "run immediately".
*/
