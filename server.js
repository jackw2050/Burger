var orm = require('./config/orm.js');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = 8080;
var app = express();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));// should this be true or false??
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//app.use(express.static('public'));

app.use(express.static(process.cwd() + '/public'));

var routes = require('./config/controller.js');
app.use('/', routes);



router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	cat.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

/*
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Koisuru2050',
    database: 'burger_db'
});
*/
app.listen(process.env.PORT || 8000, function() {
    console.log('App listening on PORT ' + PORT);
});


/*

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to database as id ' + connection.threadId);
});

*/




app.listen(PORT);








