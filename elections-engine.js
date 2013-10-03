VSchemas = require('./elections-schemas');

require('./query-handling/basic-get-functions.js');
//require('./query-handling/advanced-get-functions.js');
require('./query-handling/post-functions.js');
require('./query-handling/put-functions.js');
//require('./query-handling/delete-functions.js');
require('./query-handling/utils.js');

console.log("added all"); 
module.exports.connect = function(server, db, callback) {
    mongoose.connect('mongodb://' + server + '/' + db, callback);
    
}


module.exports.disconnect = function() {
    mongoose.disconnect();
}
//GET

