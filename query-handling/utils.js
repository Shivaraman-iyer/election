chkYear = function (year,callback) {
  console.log('checking ', year); 
    VSchemas.Year.find({"year":year},function(err,year){
    	if(err) console.log(err.message);
    	else{
    		if(!year.length){
    		    	console.log( "no length");
    			callback(null,false,null);
		}
		else{
			//console.log(year);
			callback(null,true,year);
		}
    	}
    });
};//end of chkYear


chkCandidate = function (usrId,year,callback) {
  console.log(usrId); 
    VSchemas.Year.find({"year":year},function(err,year){
    	if(err) console.log(err.message);
    	else{
	    	year.forEach(function(yer,index1,array1){
	    	console.log("yer", yer);
	    	var flag = 0;
		var candidates = yer.candidateIds;
			console.log("before loop");
			if(candidates.indexOf(usrId) != -1){
				console.log("Candidate Found");
				callback(null,true);
			}
			else{
				console.log("Candidate Not Found");
				callback(null,false);
			}
			/*candidates.forEach(function(candidate_id,index1,array1){
				console.log("insidel loop");
				if(err) console.log(err.message);
				else{
					console.log("candidate_id ",candidate_id);
					if(candidate_id != null){
						console.log("candidate ",candidate.uId);
						if(candidate_id == usrId){
							console.log("Candidate Found");
							callback(null,true,null);
						}
					}
				}
				if(index1 == array1.length - 1 && candidate.uId != usrId){
					flag =1;
				}
			});
			if(flag ==1 ){
				console.log("Candidate Not Found");
				callback(null,false,null);
			}*/
		});
    	}
    });
};//end of chkYear

