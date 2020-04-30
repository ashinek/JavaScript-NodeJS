var fs = require('fs');

/*fs.unlink('footer.html',function(error){
    if(error){
        console.log(error);
    }
    console.log('plik został usunięty');
});*/

fs.rename('plik.txt','readme.txt',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Nazwa pliku została zmieniona');
    }
})