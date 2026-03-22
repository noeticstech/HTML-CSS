/*
NOTE 3: WHY CALLBACKS ARE USEFUL

Callbacks make functions more flexible.
One function can do the main work, and another function can decide what to do
with the result.
*/

function downloadFile(fileName, callback) {
  console.log("Downloading", fileName + "...");

  setTimeout(() =>{
    console.log(fileName, "downloaded");
    callback(fileName);
  }, 4000);
}

function openFile(fileName) {
  console.log("Opening", fileName);
}

downloadFile("notes.pdf", openFile);

/*
What is happening here?
1. downloadFile starts the task
2. JavaScript waits 1 second
3. After the download is done, the callback runs
4. openFile receives the file name

This is useful when one step should happen only after another step finishes.
*/
