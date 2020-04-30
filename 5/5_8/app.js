var fs = require('fs');

var readable = fs.createReadStream('./data.txt',{encoding: 'utf8'});

var writeable = fs.createWriteStream('./data_COPY');

readable.on('data',function(chunk){
    //console.log(chunk);
    writeable.write(chunk);
});