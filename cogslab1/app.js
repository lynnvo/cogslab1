
/**
 * Module dependencies.
 */
var index = require('./routes/index');
var express = require('express');
//var path = require('path');
//var http = require('http');
//var hashtag = require('./routes/hashtag');
//var handlebars = require('express3-handlebars')
//var app = express();
//
//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/instagramexample');
//
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.set('views', __dirname + '/views');
//app.engine('handlebars', handlebars());
//app.set('view engine', 'handlebars');
//
//app.use(express.bodyParser());
//
//app.get('/',function(req,res){
//		res.render('index');
//});
//app.get('/hashtag',function(req,res){
//	res.render('hashtag');
//});
//app.post('/hashtag',hashtag.getHashtag);
//app.post('/save',hashtag.saveFavorites);
//
//// all environments
//app.set('port', process.env.PORT || 3000);
//
//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});
//
//ig.tags.info({
//		name: 'sushi',
//		complete: function(data){
//				console.log(data);
//		}
//});
