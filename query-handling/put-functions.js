require('./utils.js');

castVote = function(object,callback){
	console.log(object);
	object.committee.forEach(function(commite,index,array){
		console.log(commite);
		VSchemas.Candidate.findById(commite.pref1,function(err,candid){
			if(err) callback(err);
			else{
				if(candid != null){
				
					if(commite.committee_id == candid.committee_code && commite.batch_code == candid.batch_code){
						var thisyear = new Date();
						var MSc = "MD"+(thisyear.getFullYear()-1);
						var MP = "MP"+(thisyear.getFullYear()-1);
						var BT3 = "BT"+(thisyear.getFullYear()-3);
						console.log(BT3);
						var count = candid.countFor1+1;
						console.log("vote count ",count, " user ",candid.cName);
						if(commite.commitee_id != "PLAC" || !(candid.batch_code == MSc || candid.batch_code == MP || candid.batch_code == BT3)){
							VSchemas.Candidate.update({_id:candid}, {$set: {'countFor1':count}}, {upsert:true}, function(err, numAffected){
								if(err) console.log(err.message);
								else
									console.log(numAffected);
							});
							vote = new VSchemas.Vote();
							if(commite.vote != undefined){
								vote.create(commite.vote, function(err) { 
									if(err) callback(err);  
								});
								vote.save( function(err) {
								    // if could not save post, get content out of system
								    if(err) console.log(err.message);
								    else {
								      console.log('Vote: Vote.save done',object.vote);
									// return successfully created post's ID for great good
								    }
								});
								VSchemas.Candidate.update({_id:candid}, {$push: {'votes':vote._id}}, {upsert:true}, function(err, numAffected){
									if(err) console.log(err.message);
									else
										console.log(numAffected);
								});
							}
	    						/*switch (commite.committee_id)
							{
								case "CAFE":
									//Nothing to do as only one seat per committee
									break;
								case "SPOR":
								case "ACAD":
									if(candid.batch_code != MSc && candid.batch_code != MP){
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									break;
								case "CULT":
									if(candid.batch_code == MSc || candid.batch_code == MP){
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									else{
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2,'pref3':commite.pref3}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									break;
								case "ANNL":
									if(candid.batch_code == BT3){
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2,}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									else if(candid.batch_code == MSc || candid.batch_code == MP) {
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2,'pref3':commite.pref3}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									else{
										VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2,'pref3':commite.pref3,'pref4':commite.pref4,'pref5':commite.pref5}}, {upsert:true}, function(err, numAffected){
											if(err) console.log(err.message);
											else
												console.log(numAffected);
										});
									}
									break;
								case "PLAC":
									VSchemas.Candidate.update({_id:candid}, {$push: {'pref2':commite.pref2,'pref3':commite.pref3}}, {upsert:true}, function(err, numAffected){
										if(err) console.log(err.message);
										else
											console.log(numAffected);
									});
									break;
								default:
									break;
								
							}*/
						}
					}
				}
			}
		});
	});
};

