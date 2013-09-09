votePrefSchema = new Schema({
	whoChose1 : [{
		type: String,
		unique:true
	}],
	whoChose2 : [{
                type: String,
                unique:true
        }],
	whoChose3 : [{
                type: String,
                unique:true
        }],
	whoChose4 : [{
                type: String,
                unique:true
        }],
	whoChose5 : [{
                type: String,
                unique:true
        }]
});

votePrefSchema.methods.create = function create(object, callback){
  console.log('votePrefSchema rcvd object: \n', object);   
  if(!object.content)
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("votePrefSchema.methods.create: Bad arguments");
    
    else {
        if(object.content != undefined)
	  this.content = object.content;
	
	/*if(object.choosers != undefined && object.choosers.length > 0)
	  this.choosers = object.choosers.slice();
	else{
	  this.choosers = [{numOfStars: 1}, {numOfStars: 2}, {numOfStars: 3}, {numOfStars: 4}, {numOfStars: 5}];
	  
	
	}*/
        
        callback(null);
    }
};

mongoose.model('votePref', votePrefSchema, 'votePref');

