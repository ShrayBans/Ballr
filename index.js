var express = require('express');
var app = express();
var path = require('path');

const Zillow = require('node-zillow');
const zwsid = 'X1-ZWz1fd1ztlqeiz_8l13j'
const zillow = new Zillow(zwsid);
console.log(zillow);
var parameters = {
	state: 'CA',
	city: 'Los Angeles'
};


app.use(express.static(__dirname)); 
//serves the index.html
app.get('/json', function(req, res){
	console.log('WHAT')
	zillow.get('GetRegionChildren', parameters)
		.then(function(results){
			// console.log(results)
			res.json(results.response);
			return;
		});
});

app.listen(3000, () => {
  console.log('Server listening on port 3000-lol');
}); //listens on port 3000 -> http://localhost:3000/
