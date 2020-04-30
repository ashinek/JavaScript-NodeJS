var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

db.on('error',function(){
    console.log('Błąd połączenia');
});
db.once('open',function(){
    console.log('Udało się połączyć z bazą');
    var articleSchema = mongoose.Schema({
        title: String,
        author: String,
        body: String
    });

    var Article = mongoose.model('Article',articleSchema);

    var article1 = new Article({
        title: 'Podstawy Mongoose',
        author: 'Ksawery',
        body: 'to jest treść'
    });
    article1.save(function(err,article1){
        if (err){
            console.log(err);
        } else{
            console.log('Dodano artykuł' + article1);
        }
    })
});

