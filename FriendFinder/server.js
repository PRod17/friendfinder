// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


apiRoutes(app, friends);
htmlRoutes(app);
// var user1 = users[0].scores;
// var user2 = users[1].scores;
// var user3 = users[2].scores;

// console.log(user1, user2);
// var totalDifference= 0;

// for (var i=0; i<user1.length;i++){

//     var num1 = user1[i];
//     var num2 = user2[i];

//     var singleDifference = Math.abs(num1-num2);
//     console.log(singleDifference);
//     totalDifference = singleDifference + totalDifference
// }




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });