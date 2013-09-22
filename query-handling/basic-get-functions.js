function makeJSON(year,callback){
	var result = year.toJSON();
	callback(result);
};

getAllCandidatesByYear = function(year,callback){
	var result = [];
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				console.log(yer);
				//var candidates = yer.candidates;
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						if(err) callback(err);
						else{
							candidateinfo = candidateinfo;
							result.push(candidateinfo);
							if(index == array.length - 1)
								callback(null,result);
						}
					});
				});
			});
			
		}
	});
};

getCandidateByUsrId = function(year,usrId,callback){
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				console.log(yer);
				//var candidates = yer.candidates;
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						if(err) callback(err);
						else{
							if(candidateinfo.uId == usrId){
								callback(null,candidateinfo);
							}
						}
					});
				});
			});
			
		}
	});
};

getCandidatesByBatch = function(year,batch_code,callback){
	console.log("Fetch Candidates by Batch",batch_code);
	var result = [];
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						candidateinfo.forEach(function(candidateinfor,index1,array1){
							if(err) callback(err);
							else{
								if(candidateinfor.batch_code == batch_code){
									console.log("Candidate fetched");
									result.push(candidateinfor);
								
								}
								if(index == array.length - 1)
									callback(null,result);
							
							}
						});
						
					});
				});
			});
			
		}
	});
} 


getCandidatesByCommittee  = function(year,batch_code,comm_code,callback){
	console.log("Fetch Candidates by committee",comm_code);
	var result = [];
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						candidateinfo.forEach(function(candidateinfor,index1,array1){
							if(err) callback(err);
							else{
								if(candidateinfor.batch_code == batch_code && candidateinfor.committee_code == comm_code){
									console.log("Candidate fetched");
									result.push(candidateinfor);
								
								}
								if(index == array.length - 1)
									callback(null,result);
							
							}
						});
						
					});
				});
			});
			
		}
	});
} 


//-------------ELECTIONS--------------

getAllYears = function(callback){
	var result = [];
	VSchemas.Year.find(function(err,years){
		if(err){
			console.log(err.message);
		}
		else{
		 	if(!years.length){
		 		console.log("no length some issue");
			}
			//var candidates = year.candidates;
			years.forEach(function(year,index,array){
				year = year.toJSON();
				result.push(year);
				if(index == array.length - 1)
					callback(null,result);
			});
			
		}
	});
};

getYearInfo = function(year,callback){
	var result = [];
	VSchemas.Year.find(function(err,years){
		if(err){
			console.log(err.message);
		}
		else{
		 	if(!years.length){
		 		console.log("no length some issue");
			}
			//var candidates = year.candidates;
			years.forEach(function(yeari,index,array){
					if(yeari.year == year){
						callback(null,yeari);
				}
			});
			
		}
	});
};

