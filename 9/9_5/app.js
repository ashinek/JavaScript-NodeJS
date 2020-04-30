var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err,res){
    if(err){
        console.log('nie można połączyć się z baża danych');
    }
    else{
        console.log('Połączono z bazą');
        insertUsers(db, function(){

        })
    }

});

var insertUsers = function(db, callback){
    var collection = db.collection('users');
    var user1 = {'name': 'user1', 'password': 'qwerty'};
    var user2 = {'name': 'user2', 'password': 'qwertyyt'};
    collection.insert([user1,user2], function(err,result){
        if(err){
            console.log(err);
        } else{
            console.log('Dodano nowych użytkowników');
            callback(result);
        }
    })
}