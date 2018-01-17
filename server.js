const express = require('express');
const app = express();
// mongoose.connect("mongodb://localhost/pokemon");
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());






app.get('/', function(req,res) {
	res.send('hello');
});

	


app.listen(process.env.PORT || 3000, function() {
	console.log("listening to 3k");


});