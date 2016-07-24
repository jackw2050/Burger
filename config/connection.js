var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Koisuru2050',
    database: 'burger_db'
});

app.listen(process.env.PORT || 8000, function() {
    console.log('App listening on PORT ' + PORT);
});
