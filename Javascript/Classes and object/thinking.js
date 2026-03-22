/*
Thinking about this callback example:

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2);
});

What is happening here?

1. setTimeout needs a FUNCTION to run later.
2. The arrow function () => { ... } is not executed immediately.
3. After 2 seconds, setTimeout executes that arrow function.
4. Inside that arrow function, getNextData() is called.

Important point:
- setTimeout(() => { getNextData(); }, 2000)
  This is correct because a function is being passed to setTimeout.

- setTimeout(getNextData(), 2000)
  This is wrong for this case because getNextData() runs immediately.
  The return value of getNextData() is passed to setTimeout.
  If getNextData returns nothing, that value is undefined.

So your idea is mostly right:
- yes, writing brackets () executes the function immediately
- yes, that can lead to undefined being passed to setTimeout

But one small correction:
- the arrow function is not used "to call the same function again"
- it is used to DELAY the code so setTimeout can run it later
*/

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);

    // Call the next step only if a callback was provided.
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2);
});

/*
Output:
after 2 seconds -> data 1
after 2 more seconds -> data 2
*/

/*
Why do we check: if (getNextData) ?

Because this call:
getData(2);

does not send a second argument.
So inside that second call:
getNextData === undefined

If we wrote only:
getNextData();

then JavaScript would throw an error:
TypeError: getNextData is not a function
*/

/*
Wrong idea example:

function test() {
  console.log("running now");
}

setTimeout(test(), 2000);

What happens?
1. test() runs immediately
2. console prints: running now
3. setTimeout receives the return value of test()
4. since test() returns nothing, it passes undefined

Correct ways:
setTimeout(test, 2000);

or

setTimeout(() => {
  test();
}, 2000);
*/

function test() {
  console.log("running after delay");
}

setTimeout(test, 1000);

setTimeout(() => {
  test();
}, 1500);
