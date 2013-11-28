votePrefSchema = new Schema({
	pref1 : {
		type: Schema.ObjectId
	},
	pref2 : {
		type: Schema.ObjectId
	},
	pref3 : {
		type: Schema.ObjectId
	},
	pref4 : {
		type: Schema.ObjectId
	},
	pref5 : {
		type: Schema.ObjectId
	}
});

votePrefSchema.methods.create = function create(object, callback){
	console.log('Vote rcvd object: \n', object.uId);
        // date will be generated upon actual object creation, not client-side
        if(object.pref1)
		this.pref1 = object.pref1;
        if(object.pref2)
		this.pref2 = object.pref2;
 	if(object.pref3)
		this.pref3 = object.pref3;
	if(object.pref4)
		this.pref4 = object.pref4;
	if(object.pref5)
		this.pref5 = object.pref5;
 	callback(null);
};

mongoose.model('votes', votePrefSchema, 'votes');

