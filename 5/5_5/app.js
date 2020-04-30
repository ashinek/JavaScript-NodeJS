var fs = require('fs');

/*fs.mkdir('scripts',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Katalog został utworzony');
    }
});*/

/*fs.rename('scripts','styles',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Nazwa katalogu została zmieniona');
    }
});*/

fs.rmdir('styles',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Katalog został usunięty');
    }
});