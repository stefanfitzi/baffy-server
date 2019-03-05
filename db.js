var properties = require('./properties');
var mysql = require('mysql');

// database connection pool (configured with values from file application.properties)
var pool = mysql.createPool({
    connectionLimit: properties.get('db.pool.connectionLimit'),
    host: properties.get('db.pool.host'),
    port: properties.get('db.pool.port'),
    user: properties.get('db.pool.user'),
    password: properties.get('db.pool.password'),
    database: properties.get('db.pool.database'),
    debug: properties.get('db.pool.debug'),
});

// base function for all database requests (parameters: res=http response, query=SQL query with '?' placeholders, data=object with a value for every query placeholder)
function handle_database(res, query, data) {

    pool.getConnection(function (err, connection) {
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        connection.query(query, data, function (err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error executing the query: " + query + "with data: " + data });
            return;
        });
    });
}

module.exports = handle_database;