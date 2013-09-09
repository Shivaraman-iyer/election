
//--------------CANDIDATES--------------
/*
	Route to get all candidates of a given year
*/
 
app.get('/api/election/get_all_candidates/:year',function(req,res){
	getAllCandidatesByYear(req.params.year,function(err, candidates){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(candidates);
	});
});

/*
	Route to get a candidate of a year based on his/her College ID
*/

app.get('/api/election/get_candidate_by_id/:year/:usrid',function(req,res){
	getCandidateByUsrId(req.params.year,req.params.usrid,function(err,candidate){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(candidate);
	});
});

/*
	Route to get candidates of a selected batch in a selected year
*/

app.get('/api/election/get_candidates_by_batch/:year/:batch',function(req,res){
	getCandidatesByBatch(req.params.year,req.params.batch,function(err,candidates){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(candidates);
	});
});

/*
	Route to get candidates in a committee of a batch and year
*/

app.get('/api/election/get_candidates_by_committee/:year/:batch/:committee',function(req,res){
	getCandidatesByCommittee(req.params.year,req.params.batch,req.params.committee,function(err,candidates){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(candidates);
		}
	});
});

//-------------ELECTIONS--------------

/*
	Route to get all the years for which there is data stored
*/
app.get('/api/election/get_all_years'function(req,res){
	getAllYears(funtion(err,years){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(years);
	});
});

/*
	Route to get detailed year info
*/
app.get('/api/election/get_year_info/:year',function(req,res){
	getYearInfo(req.params.year,function(err,yearinfo){
		if(err){
			console.log(err.message);
			res.send(err.message);
		}
		else
			res.send(yearinfo);
	});
});

//--------------Results--------------
/*
	Route to complete result of a certain year's elections
*/
app.get('/api/election/get_results_by_year/:year',function(req,res){
        getResultsByYear(req.params.year,function(err,result){
                if(err){
                        console.log(err.message);
                        res.send(err.message);
                }
                else
                        res.send(result);
        });
});

/*
        Route to complete result of a certain Batch's election in a particular year
*/
app.get('/api/election/get_results_by_batch/:year/:batch',function(req,res){
        getResultsByBatch(req.params.year,req.params.batch,function(err,result){
                if(err){
                        console.log(err.message);
                        res.send(err.message);
                }
                else
                        res.send(result);
        });
});

/*
        Route to complete result of a certain committee in a batch of a particular election
*/
app.get('/api/election/get_results_by_committee/:year/:batch/:committee',function(req,res){
        getResultsByYear(req.params.year,req.params.batch,req.params.committee,function(err,result){
                if(err){
                        console.log(err.message);
                        res.send(err.message);
                }
                else
                        res.send(result);
        });
});

/*
        Route to Total voter of a batch in a particular year
*/
app.get('/api/election/get_total_voters_by_batch/:year/:batch',function(req,res){
        getVotersByBatch(req.params.year,req.params.batch,function(err,voters){
                if(err){
                        console.log(err.message);
                        res.send(err.message);
                }
                else
                        res.send(voters);
        });
});

/*
        Route to total voters in a  year's election
*/
app.get('/api/election/get_voters_by_year/:year',function(req,res){
        getVotersByYear(req.params.year,function(err,voters){
                if(err){
                        console.log(err.message);
                        res.send(err.message);
                }
                else
                        res.send(voters);
        });
});
