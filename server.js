const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));





app.get('/', function(req,res) {
	res.send('hello');
});

	


app.listen(3000, function() {
	console.log("listening to 3k");


});