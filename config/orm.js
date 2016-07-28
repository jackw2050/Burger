/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/

var connection = require('./connection.js');

function selectAll(){

}




// add sequelize here








// VVVVVVVVVVV  REPLACE BELOW VVVVVVVVVV
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	

 insertOne:function(){

},
 updateOne: function(){
	
},

	selectWhere: function (tableInput, colToSearch, valOfCol) {
		// SELECT * FROM  table WHERE table = ?
		var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
		connection.query(queryString, [valOfCol], function (err, result) {
			console.log("SELECT * "  + "WHERE " + valOfCol + "=      " + result[0],[0]);
		})
	},
		selectAndOrder: function (whatToSelect, table, orderCol, orderBy) {
		var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	}
};

module.exports = orm;
