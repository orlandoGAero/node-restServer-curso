
require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// app.use(express.json())
 
app.get('/usuario', function (req, res) {
  res.json('get usuarios');
});

app.post('/usuario', function (req, res) {
	let body = req.body;

	if (body.nombre === undefined) {
		res.status(404).json({
			ok: false,
			mensaje: 'Se necesita un nombre'
		})
	} else {
	  	res.json({
	  		usuario: body
	  	});
	}
});

app.put('/usuario/:id', function (req, res) {
	let id = req.params.id;
  	res.json({
  		id
  	});
});

app.delete('/usuario', function (req, res) {
  res.json('delete usuarios');
});
 
app.listen(process.env.PORT,() => {
	console.log("Corriendo en el puerto:", process.env.PORT);
});