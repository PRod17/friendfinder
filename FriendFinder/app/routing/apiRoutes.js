module.exports = function (app, friends) {
// Displays a single character, or returns false
app.get("/api/friends", function(req, res) {
    res.json(friends);
  
      
    
  });

  // Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
     
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });
};