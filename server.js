const express = require('express');
const app = express();
// mongoose.connect("mongodb://localhost/pokemon");
const router = require("./config/routes");
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.use('/', router);

	


app.listen(process.env.PORT || 3000, function() {
	console.log("listening to 3k");


});