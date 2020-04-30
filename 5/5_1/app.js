var fs =require('fs');

//var fileList = fs.readdirSync('./');

//console.log(fileList);

fs.readdir('./',function(error,filelist){
    console.log(error)
    console.log(filelist);
});
