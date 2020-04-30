var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3000});

wss.on('connection', function(ws){
	ws.send('Witaj na serwerze WS');
	ws.on('message', function(message){
		console.log(message);
	})
});