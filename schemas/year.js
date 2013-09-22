yearSchema = new Schema({
	year: {
		type:String,
		required: true
	},
	start_of_application:{
		type:Date,
		required:true
	},
	end_of_application:{
		type:Date,
		required:true
	},
	start_of_withdrawal:{
                type:Date,
                required:true
        },
        end_of_withdrawal:{
                type:Date,
                required:true
        },
	start_of_election:{
                type:Date,
                required:true
        },
        end_of_election:{
                type:Date,
                required:true
        },
	result_time:{
		type:Date,
		required:true	
	},
	candidates:[{
		type: Schema.ObjectId
	}],
	candidateIds:[{
		type: Number
	}]
});

yearSchema.methods.create = function create(object, callback) {
  console.log('yearSchema rcvd object: \n', object);
    if(!object.start_app){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, start_app", object.start_app);}
    else if(!object.end_app){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, end_app", object.end_app);}
    else if(!object.start_app){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, start_with", object.start_with);}
    else if(!object.end_with){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, end_with", object.end_app);}
    else if(!object.start_elec){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, start_elec", object.start_elec);}
    else if(!object.end_elec){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, end_elec", object.end_elec);}
    else if(!object.res_time){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
        console.log("yearSchema.methods.create: Bad arguments, res_time", object.res_time);}
    else {
        // date will be generated upon actual object creation, not client-side
	var yr = new Date();
        this.year = yr.getFullYear();
	this.start_of_application = object.start_app;
	this.end_of_application = object.end_app;
        this.start_of_withdrawal = object.start_with;
        this.end_of_withdrawal = object.end_with;
        this.start_of_election = object.start_elec;
        this.end_of_election = object.end_elec;
        this.result_time = object.res_time;
	if(object.candidates != undefined && object.candidates.length > 0)
	{
		this.candidates = object.candidates.slice();
	}
	if(object.candidateIds != undefined && object.candidateIds.length > 0)
	{
		this.candidateIds = object.candidateIds.slice();
	}
        callback(null);
    }
};

mongoose.model('year', yearSchema, 'year');
