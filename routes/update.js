app.post('/api/election/vote', function(req, res){
	console.log("vote",req.body);
    	castVote(req.body,function(err, voted){
	if(err){
		console.log(err.message);
	}
	else{
		console.log('vote given to',req.params.id);
		res.send(voted);
	}
    });
    res.send();
});

