var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');

//???router.use(bodyParser.urlencoded({ extended: true }));
// parse incoming request bodies in a middleware before your handlers and makes them available under req.body
router.use(bodyParser.json());

// get all events
router.get('/', function (req, res) {
    console.log('request: ' + req.method + ' all events');
    db(res, 'select * from event order by date desc');
});

// get one event by id
router.get('/:id', function (req, res) {
    console.log('request: ' + req.method + ' event with id ' + req.params.id);
    db(res, 'select * from event where id=?', req.params.id);
});

// store a new event (id is generated by database)
router.post('/', function (req, res) {
    console.log('request: ' + req.method + ' event with data: ' + JSON.stringify(req.body));
    var data = req.body;
    db(res, 'insert into event set ?', data);
});

// update an existing event
router.put('/', function (req, res) {
    console.log('request: ' + req.method + ' event with data: ' + JSON.stringify(req.body));
    var data = req.body;
    db(res, 'update event set ? where id=?', [data, data.id]);
});

// delete one event by id
router.delete('/:id', function (req, res) {
    console.log('request: ' + req.method + ' event with id ' + req.params.id);
    db(res, 'delete from event where id=?', req.params.id);
});

module.exports = router;