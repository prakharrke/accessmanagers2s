var express = require('express');
var mysql      = require('mysql');

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/authenticate', (req ,res)=>{

	var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'prakhar',
  password : '',
  database : 'accmanager'
});

	connection.connect();

	connection.query('SELECT * FROM ACCESS_STATUS', (error, results, fields)=>{
		if(error)
			console.log(error)
		console.log(fields)
	})

	connection.end();

})

app.listen(process.env.PORT || 3001)