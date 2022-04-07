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

var length = localStorage.length; //number of key/value pairs
tags = []; //create empty array

// load all keys
for (var i = 0; i < length; i++) {
    tags[i] = localStorage.key(i);
} // end for

tags.sort(); // sort the keys

var markup = "<ul>"; // used to store search link markup
var url = "http://search.twitter.com/search?q=";

//build list of links
