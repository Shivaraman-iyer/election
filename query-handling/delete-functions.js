withdrawApplication = function(id, callback){
console.log("Let's delete");
  VSchemas.Candidate.findById(id, function(err,docs){
  if (err) callback(err);
  	console.log("docs ", docs);
  if (!docs || !Array.isArray(docs) || docs.length === 0) 
    callback(new Error('No matching documents found.'));
  if(Array.isArray(docs))
  docs.forEach( function (doc) {
    console.log('Matching doc found:\n',doc);
    doc.remove();
  });
  if(!Array.isArray(docs))
    docs.remove();
});

  
};
