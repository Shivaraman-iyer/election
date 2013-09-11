function makeJSON(year,callback){
	var result = year.toJSON();
	callback(result);
}

getAllCandidatesByYear = function(year,callback){
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){

		}
		else {
			var candidates = year.candidates;
			candidates.foreach(function(candidate,index,array){
				VSchemas.candidate.findById(candidate,function(err,candidateinfo){
					if(err) callback(err);
					else{
						
					}
				});
			});
		}
	});
}
