mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    ObjectId = mongoose.Types.ObjectId;
    
//Load schema models

require('./schemas/year.js');
require('./schemas/candidate.js');
require('./schemas/votes.js');

module.exports.Year = mongoose.model('year');
module.exports.Candidate = mongoose.model('candidateInfo');
module.exports.Vote = mongoose.model('votes');

module.exports.model = function(modelname) {
     return mongoose.model(modelname);
}
