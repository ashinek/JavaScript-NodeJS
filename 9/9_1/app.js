var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kurs_node'
});

/*connection.connect(function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log('Połączono z bazą');
    }
});
*/
connection.query('SELECT * FROM users', function(err,rows){
    if (err){
        console.log(err);
    }
    else{
        console.log(rows);
    }
});

connection.end();

