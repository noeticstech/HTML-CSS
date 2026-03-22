/*
NOTE 4: CALLBACK HELL

When callbacks are nested too deeply, the code becomes hard to read and manage.
This problem is called callback hell.

The nested example below works, but it becomes messy as steps increase.
*/

function loginUser(callback) {
  setTimeout(function () {
    console.log("User logged in");
    callback({ id: 1, name: "Vaibhav" });
  }, 500);
}

function getUserProfile(user, callback) {
  setTimeout(function () {
    console.log("Fetched profile for", user.name);
    callback({ age: 21, city: "Kanpur" });
  }, 500);
}

function getUserPosts(user, callback) {
  setTimeout(function () {
    console.log("Fetched posts for", user.name);
    callback(["Post 1", "Post 2"]);
  }, 500);
}

console.log("Nested callback version:");

loginUser(function (user) {
  getUserProfile(user, function (profile) {
    getUserPosts(user, function (posts) {
      console.log("Final data:", user, profile, posts);
      console.log("");
      console.log("Cleaner callback version:");
      startCleanerVersion();
    });
  });
});

function startCleanerVersion() {
  loginUser(handleUser);
}

function handleUser(user) {
  getUserProfile(user, function (profile) {
    handleProfile(user, profile);
  });
}

function handleProfile(user, profile) {
  getUserPosts(user, function (posts) {
    handlePosts(user, profile, posts);
  });
}

function handlePosts(user, profile, posts) {
  console.log("Final data:", user, profile, posts);
}

/*
Beginner note:
- Deep nesting is hard to maintain.
- Named functions can make callback code easier to read.
- For bigger async programs, developers often use Promises or async/await.
*/
