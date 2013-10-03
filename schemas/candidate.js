candidateInfoSchema = new Schema({
	cName: {
		type:String,
		required: true
	},
	uId: {
		type:Number,
		required: true
	},
	contactNo: {
		type:Number,
		required: true
	},
	batch_code: {
		type:String,
		required: true
	},
	batch_name: {
		type:String,
		required:true
	},
	committee_code: {
		type:String,
		required: true
	},
	committee_name: {
		type:String,
		required: true
	},
	votes:{
		type: Number
	},
	countFor1 : {
		type: Number
	},
	countFor2 : {
		type: Number
	},
	countFor3 : {
		type: Number
	},
	countFor4 : {
		type: Number
	},
	countFor5 : {
		type: Number
	}
});

candidateInfoSchema.methods.create = function create(object, callback) {
  console.log('candidateInfoSchema rcvd object: \n', object.uId);
    if(!object.cName){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
	console.log("candidateInfoSchema.methods.create: Bad arguments, name", object.cName);}
     else if(!object.uId)
       console.log("candidateInfoSchema.methods.create: Bad arguments, User Id", object.uId);
     else if(!object.contactNo)
       console.log("candidateInfoSchema.methods.create: Bad arguments, contact No", object.contactNo);
     else if(!object.batch_code)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Batch Code", object.batch_code);
     else if(!object.batch_name)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Batch Name", object.batch_name);
     else if(!object.comm_code)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Committee Code", object.comm_code);
     else if(!object.comm_name)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Committee Name", object.comm_name);
    else {
        // date will be generated upon actual object creation, not client-side
        this.cName = object.cName;
	this.uId = object.uId;
	this.contactNo = object.contactNo;
	this.batch_code = object.batch_code;
	this.batch_name = object.batch_name;
	this.committee_code = object.comm_code;
	this.committee_name = object.comm_name;
	this.votes = object.votes;
	this.countFor1 = 0;
	this.countFor2 = 0;
	this.countFor3 = 0;
	this.countFor4 = 0;
	this.countFor5 = 0;
        callback(null);
    }
};

mongoose.model('candidateInfo', candidateInfoSchema, 'candidateInfo');
