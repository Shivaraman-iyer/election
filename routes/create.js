app.post('/api/election/apply',function(req,res){
	console.log('new candidate applicatoin \n',req.body);
	addNewCandidate(req.body,function(err,candidate){
		if(err) {
			console.log(err.message);
		}
		else {
			console.log(candidate, 'added');
			res.send();
		}
	});
});
app.post('/api/election/initialize',function(req,res){
        console.log('Initialize \n',req.body);
        initialize(req.body,function(err,init){
                if(err) {
                        console.log(err.message);
                }
                else {
                        console.log(init, 'added');
                        res.send();
                }
        });
});
