
/**
 * Module dependencies.
 */

var express = require('express');
var indexController = require("./controllers/index.js")
var http = require('http');
var path = require('path');
var mongoose = require('mongoose')
var app = express();

mongoose.connect('mongodb://localhost/studentapp');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', indexController.index);

app.get('/students', indexController.list);

app.post('/student', indexController.add);
app.get('/student', indexController.maybe);

app.get('/signup', indexController.signup);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
