module.exports = function (app, friends) {
// Displays a single character, or returns false
app.get("/api/friends", function(req, res) {
    res.json(friends);
  
      
    
  });


app.post("/api/friends", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;
  var newFriendScore = newFriend.scores;
  var theMatch = {
    name:"",
    photo:"",
    friendDifference: Infinity

    
  };
  //var leastDifference = 

  

  for(var i=0; i <friends.length; i++) {
      var totalDifference = 0;

      for (var j= 0; j < friends[i].scores.length; j++) {
        
          var num1 = parseInt(friends[i].scores[j]);
          var num2 = parseInt(newFriendScore[j]);

          //var singleDifference = Math.abs(num1 - num2);

          totalDifference += Math.abs(num2 - num1);
         
      }
      

      if (totalDifference <= theMatch.friendDifference) {
          theMatch.name = friends[i].name;
          theMatch.photo = friends[i].photo;
          theMatch.friendDifference = totalDifference;

      }
  };

  friends.push(newFriend);

  res.json(theMatch);
});
};