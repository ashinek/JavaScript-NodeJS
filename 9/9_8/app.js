var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', function(){
	console.log('Błąd połączenia');
});
db.once('open', function(){
	console.log('Połączenie otwarte');
});