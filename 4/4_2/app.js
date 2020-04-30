var events = require('events');

var emiter = new events.EventEmitter();

emiter.on('userRegistered', showGreetings);

function showGreetings(){
    console.log('Witaj w naszym serwisie');
}

emiter.emit('userRegistered');