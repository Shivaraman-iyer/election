function makeJSON(year,callback){
	var result = year.toJSON();
	callback(result);
};

getAllCandidatesByYear = function(year,callback){
	var result = [];
	VSchemas.Year.findOne({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
				//var candidates = yer.candidates;
				VSchemas.Candidate.find(function(err,candidates_f){
					if(err) callback(err);
					else
					candidates_f.forEach(function(candidate,index,array){
						if (year.candidateIds.indexOf(candidate.uId)>-1){
							console.log("Candidate fetched");
							console.log("candidate: ",index," ", candidate );
							result.push(candidate);
						}
						if(index == array.length -1){
							callback(null,result);
						}
					});
				});
//				yer.candidates.forEach(function(candidate,index,array){
//					VSchemas.Candidate.findById(candidate,function(err,candidateinfo){
//						if(err) callback(err);
//						else{
//							candidateinfo = candidateinfo;
//							result.push(candidateinfo);
//							if(index == array.length - 1)
//								callback(null,result);
//						}
//					});
//				});
			
		}
	});
};

getCandidateByUsrId = function(year,usrId,callback){
	VSchemas.Year.findOne({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			VSchemas.Candidate.find({"uId":usrId},function(err, candidateinfo){
				candidateinfo.forEach(function(candidate,index,array){
					if(year.candidates.indexOf(candidate._id)>-1){
						callback(null,candidate);
					}
				});
			});
			
		}
	});
};

getCandidatesByBatch = function(year,batchcode,callback){
	console.log("Fetch Candidates by Batch",batchcode);
	var result = [];
	VSchemas.Year.findOne({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
				VSchemas.Candidate.find({"batch_code":batchcode},function(err,bat_cand){
					if(bat_cand.length != 0)
						bat_cand.forEach(function(candidateinfo,index_bat,array_bat){
							if(year.candidateIds.indexOf(candidateinfo.uId) > -1){
								console.log("Candidate fetched");
								console.log("res: ",index_bat," ", candidateinfo );
								result.push(candidateinfo);
							}
							if(index_bat == array_bat.length - 1){
								console.log("result" + result);
								callback(null,result);
							}
						});
					else
						callback(null,result);
				});
		}
	});
} 


getCandidatesByCommittee  = function(year,batch_code,comm_code,callback){
	console.log("Fetch Candidates by committee",comm_code);
	var result = [];
	VSchemas.Year.findOne({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			VSchemas.Candidate.find({"batch_code":batch_code,"committee_code":comm_code},function(err, candidates){
				candidates.forEach(function(candidate,index,array){
					if(year.candidates.indexOf(candidate._id) > -1){
						result.push(candidate);
					}
					if(index == array.length - 1)
						callback(null,result);
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

