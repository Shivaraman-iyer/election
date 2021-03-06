/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose');

//create server
app = module.exports = express('127.0.0.1');

//connect to the elections engine
elections = require('./elections-engine.js');

elections.connect('localhost', 'elections_db', function(err) {
  if(err)	console.log(err);
  else	console.log("connected.");
});


connect = require('connect');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.logger( { format: ':date :remote-addr :method :status :url' } ));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes/create.js');
require('./routes/read.js');
require('./routes/delete.js');
require('./routes/update.js');


if(!module.parent){
app.listen(3000);
console.log("Express server listening on port %d in %s mode",process.env.PORT,  app.settings.env);
}

