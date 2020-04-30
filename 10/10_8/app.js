var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200);
	res.end('<h1>Witaj na naszym serwerze</h1>');
}).listen(3000);

console.log('Serwer uruchomiony');
console.log('dodano linie');