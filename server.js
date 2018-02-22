const express = require('express');
const app = express();
// mongoose.connect("mongodb://localhost/pokemon");
const router = require("./config/routes");
var bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


require('./config/passport')(passport);







app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.engine('ejs', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));





app.use(session({secret: 'Hello'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.use('/', (req,res)=>{
res.sendFile( __dirname + "/public/home.html")
	});


	


app.listen(process.env.PORT || 3000, function() {
	console.log("listening to 3k");


});