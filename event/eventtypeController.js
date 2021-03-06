var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');

// get all event types
router.get('/', function (req, res) {
    console.log('request: ' + req.method + ' all event types');
    db(res, 'select * from event_type');
});

// store a new event type (id is generated by database)
router.post('/', function (req, res) {
    console.log('request: ' + req.method + ' event type with data: ' + JSON.stringify(req.body));
    var data = req.body;
    db(res, 'insert into event_type set ?', data);
});

// update an existing event type
router.put('/', function (req, res) {
    console.log('request: ' + req.method + ' even type with data: ' + JSON.stringify(req.body));
    var data = req.body;
    db(res, 'update event_type set ? where id=?', [data, data.id]);
});

// delete one event type by id
router.delete('/:id', function (req, res) {
    console.log('request: ' + req.method + ' event type with id ' + req.params.id);
    db(res, 'delete from event_type where id=?', req.params.id);
});

module.exports = router;
