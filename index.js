var express = require('express')
var bodyParser = require('body-parser');
var mysql = require('mysql')
  
var app = express()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());


var pool      =    mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'bafapp',
    password : 'bafapp',
    database : 'bafapp',
    debug    :  false
});

function handle_database(req,res, query, data) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        connection.query(query, data, function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

app.get('/member', function(req, res) {
    console.log('request: ' + req.method + ' all members');
	handle_database(req,res, 'select * from member');
})

app.get('/member/:id', function(req, res) {
    console.log('request: ' + req.method + ' member with id ' + req.params.id);
	handle_database(req,res, 'select * from member where id='  + req.params.id);
})

app.post('/member', function(req, res) {
    console.log('request: ' + req.method + " member with data: " + JSON.stringify(req.body));
	var data = req.body;
	handle_database(req,res, 'insert into member set ?', data);
})

app.delete('/member/:id', function(req, res) {
    console.log('request: ' + req.method + ' member with id ' + req.params.id);
	handle_database(req,res, 'delete from member where id='  + req.params.id);
})

app.listen(3000)