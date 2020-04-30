var readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Jak masz na imie?: ',function(answer){
    r1.setPrompt('Jaki jest Twój ulubiony język programowania ' + answer +'? ');
    r1.prompt();
    r1.on('line',function(language){
        console.log(language);
    });
    //r1.close();
});