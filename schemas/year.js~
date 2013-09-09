yearSchema = new Schema({
	year: {
		type:String,
		required: true
	},
	batches:[{
		type: Schema.ObjectId
	}]
});

yearSchema.methods.create = function create(object, callback) {
  console.log('yearSchema rcvd object: \n', object);
    if(!object.year){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
	console.log("yearSchema.methods.create: Bad arguments, year", object.yearName);}
    else {
        // date will be generated upon actual object creation, not client-side
        this.year = object.year;
	if(object.batches != undefined && object.batches.length > 0)
	{
		this.batches = object.batches.slice();
	}
        callback(null);
    }
};

mongoose.model('year', yearSchema, 'year');
