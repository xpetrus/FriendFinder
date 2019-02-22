var friendsData = require ("../data/friends");

module.exports = function(app){
    
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    //Form submission
    app.post("/api/friends", function(req, res){
        var userScore = req.body.scores;
        
        var smallestDiff = 100;
        var position = 0;
        var totalDiff = 0;
        //loop through all friends saved scores
        for(var i = 0; i < friendsData.length; i++){
            var compareScore = friendsData[i].scores; 
            //compare each score array with new user score array
            for(var j = 0; j < 10; j++){
                
                var diff = Math.abs(compareScore[j] - userScore[j]);
                totalDiff += diff;
            }
            if(totalDiff < smallestDiff){
                smallestDiff = totalDiff;
                position = i;
                totalDiff = 0;
            }
        }
        console.log("The person with the greatest compatibility is: "+friendsData[position].name);
       // console.log(userScore);
        friendsData.push(req.body);
        console.log("working...");
        res.json(friendsData[position]);

        
        
    });




    


}