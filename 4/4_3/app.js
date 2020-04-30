var events = require('events');

var emiter = new events.EventEmitter();

emiter.on('userRegistered', function(username){
	console.log(username + ': Witaj w naszym serwisie');
});





emiter.emit('userRegistered','Dominik');
