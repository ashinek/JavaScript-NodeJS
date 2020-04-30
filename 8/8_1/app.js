var express = require('express');

var app = express();
app.set('view engine', 'jade');

app.use('/assets', express.static('public'));

/* routing */
app.get('/',function(req,res){
    res.render('index',{ query: req.query.id });
});
app.get('/contact',function(req,res){
    res.send('Strona kontakt');
});
app.get('/product/:id',function(req,res){
    res.send('Wartość ID' + req.params.id);
});

app.get('/firm',function(req,res){
    res.send('Strona o Firmie');
});

app.listen(3000);
