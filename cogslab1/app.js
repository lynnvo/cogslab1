
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var handlebars = require('express3-handlebars')
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/',function(req,res){
		res.render('index');
});

// all environments
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});