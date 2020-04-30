process.stdout.write('Jak masz na imię? ');

process.stdin.on('data',function(name){
    console.log('Witaj: '+name.toString());
});