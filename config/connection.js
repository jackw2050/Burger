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

var config = "developmentConfig";
//var config = "productionConfig";

var mysql = require('mysql');

if(config == "productionConfig"){
var connection = mysql.createConnection({
	host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "hywizj7ucl968ik1",
	password: "j7site5lqbowxc93",
	database: "u8dury6cu2bl0s3n"
});
}
else if(config == "developmentConfig"){
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Koisuru2050',
	database: 'burger_db'
});
}


connection.connect(function (err) {
	if (err) {
		console.error('error connecting to database: ' + err.stack);
		return;
	}
	console.log('connected  as id ' + connection.threadId);
});

module.exports = connection;