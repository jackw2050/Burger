/*var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Koisuru2050',
    database: 'burger_db'
});

app.listen(process.env.PORT || 8000, function() {
    console.log('App listening on PORT ' + PORT);
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting to database: ' + err.stack);
		return;
	}
	console.log('connected to  datebase as id ' + connection.threadId);
});
app.listen(PORT);
module.exports = connection;

*/


var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Koisuru2050',
	database: 'burger_db'
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting to database: ' + err.stack);
		return;
	}
	console.log('connected  as id ' + connection.threadId);
});

module.exports = connection;