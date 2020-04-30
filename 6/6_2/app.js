var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200);
    res.end('Witaj');
}).listen(3000);

console.log('Serwer uruchomiony...');