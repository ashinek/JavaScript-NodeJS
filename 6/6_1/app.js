var http = require('http');

http.get('http://strefakursow.pl', function(res){
    res.on('data', function(data){
        console.log(data);
    })
});