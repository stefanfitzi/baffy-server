var app = require('./app');

var port = process.env.PORT || 49999;

// CORS implementation
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

var server = app.listen(port, function() {
    console.log('Server is listening on port ' + port);
 });
