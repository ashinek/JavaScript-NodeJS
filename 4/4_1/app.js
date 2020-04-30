function showInfo(callback) {
    console.log('Kurs Node.js');
    callback();
}

showInfo(function(){
    console.log('Callback został wywołany');
});