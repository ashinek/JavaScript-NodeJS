var fs = require('fs');

fs.readFile('./modules.txt','utf-8',function(error,file){
    console.log(file);
});

//var fileList = fs.readdirSync('./');

//console.log(fileList);