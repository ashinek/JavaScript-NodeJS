var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Witaj w Expressjs');
});
app.listen(3000);