var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3000});

wss.on('connection',function(ws){
    ws.on('message', function(message){
        wss.clients.forEach(function(client){
            client.send(message);
        });
    });
});
