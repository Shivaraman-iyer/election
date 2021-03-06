require('./utils.js');

initialize = function (object, callback) {
  console.log('creating: ', object.year); 
    year = new VSchemas.Year();
    var yr = new Date();
    chkYear(yr.getFullYear(),function(err,val,ys){
    	if(err) console.log(err.message);
    	else{
    		console.log(val);
    		if(!val){
	    		year.create(object, function(err) { 
				if(err) callback(err);  
				else {
					callback(null, year);
				}
			});
			year.save( function(err) {
			    // if could not save post, get content out of system
			    if(err) console.log(err.message);
			    else {
			      console.log('saveYear: Year.save done',object.year);
				// return successfully created post's ID for great good
				callback(null, year._id);
			    }
			});
    		}
    		
    	}
    });
    
};//end of initialize


addNewCandidate = function (object, callback) {
	console.log('creating: ', object.uId);
	var yr = new Date();
	chkYear(yr.getFullYear(),function(err,val,year){
	if(err) console.log(err.message);
	else{
		//console.log(year);
		if(val){
			console.log("lenght",year.length);
	    		year.forEach(function(yer,index1,array1){
				var candidates = yer.candidates;
					chkCandidate(object.uId,yer.year,function(err,valid){
		    				if(err) throw err;
		    				else{
			    				console.log("val1",valid);
		    					if(!valid){
		    						candidate = new VSchemas.Candidate();
		    						console.log("val",valid);
		    						candidate.create(object, function(err) { 
									if(err) callback(err);  
									else {
										callback(null, candidate);
									}
									console.log("created candidate ", object.uId);
								});
								console.log("CREATE COMPLETE");
								candidate.save( function(err) {
								    // if could not save post, get content out of system
								    if(err) throw err;
								    else {
								      console.log('saveCandidate: Candidate.save done ',object.uId);
									// return successfully created post's ID for great good
									callback(null, candidate.id);
								    }
								});
								VSchemas.Year.update({_id:yer._id}, {$push: {'candidateIds':candidate.uId,'candidates': candidate}}, {upsert:true}, function(err, numAffected){
								if(err) console.log(err.message);
								else
									console.log(numAffected);
							});
		    					}
		    				}
		    			});
			});
		
		}
	}
	});
};
