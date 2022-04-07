// Fig. 11.19: FavoriteTwitterSearches.js
// Storing and retrieving key/value pairs using
// HTML5 localStorage and sessionStorage
var tags; //array of tags for queries

// loads previously saved searches and displays them in the page
function loadSearches() {
    if (!sessionStorage.getItem("herePreviously")) {
        sessionStorage.setItem("herePreviously", "true");
        document.getElementById("welcomeMessage").innerHTML =
            "Welcome to the Favorite Twitter Searches App";
    } //end if
}
