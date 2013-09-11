app.post('/api/vote/:id', function(req, res){
    VSchemas.Year.findByYear(Date.getFullYear(), function( err, year){
	if(err){
   		console.log(err.message);
    		//callback(err);
  	}
  	else{
    		console.log(numAffected, ' document(s) updated');
    		voteCandidate(req.params.id,req.body,function(err, voted){
		if(err){
	   		console.log(err.message);
		}
		else{
			console.log('vote given to',req.params.id);
			res.send(voted);
		}
    });
    res.send();
  }
});
});
