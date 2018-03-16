var express = require('express');
var properties = require('./properties');

var app = express();

function printOutProperties() {
    return '\ndb-host: ' + properties.get('db.pool.host') + '\ndatabase: ' + properties.get('db.pool.database') + '\ndb-user: ' + properties.get('db.pool.user');
}
console.log('start application with the following properties: ' + printOutProperties());

var memberController = require('./member/memberController');
app.use('/member', memberController);
var registrationController = require('./member/registrationController');
app.use('/registration', registrationController);

var eventController = require('./event/eventController');
app.use('/event', eventController);
var eventtypeController = require('./event/eventtypeController');
app.use('/eventtype', eventtypeController);

module.exports = app;
