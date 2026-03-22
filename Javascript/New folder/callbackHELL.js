function loginUser(callback) {
    setTimeout(function() {
        console.log("User logged in");
        callback({ id: 1, name: "Vaibhav" });
    }, 1000);
}

function getUserProfile(user, callback) {
    setTimeout(function() {
        console.log("Fetched profile for", user.name);
        callback({ age: 21, city: "Kanpur" });
    }, 1000);
}

function getUserPosts(user, callback) {
    setTimeout(function() {
        console.log("Fetched posts for", user.name);
        callback(["Post1", "Post2"]);
    }, 1000);
}

function saveLog(callback) {
    setTimeout(function() {
        console.log("Log saved");
        callback();
    }, 1000);
}

loginUser(function(user) {

    getUserProfile(user, function(profile) {

        getUserPosts(user, function(posts) {

            saveLog(function() {
                console.log("All steps completed");
            });

        });

    });

});

