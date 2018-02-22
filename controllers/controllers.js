const Pokemon = require("../models/pokemon");
const passport = require('passport');




function getIndex(req,res){
	res.sendFile("/Users/stevanolie/pokedex/views/index.html")
}


function signup(req,res){
	res.sendFile("/Users/stevanolie/pokedex/views/signup.html")
};

function root(req,res){

	res.sendFile( __dirname + "/home.html")


};




function getForm(req,res){
	res.sendFile("/Users/stevanolie/pokedex/views/form.html")
};

function pokemonlist(req,res){
	pokemon = new Pokemon();
	pokemon.collection.find().toArray(function(err, result){
		res.json(result);
	});
};

function putPokemon(req,res){
	Pokemon.findOneAndUpdate({name:req.params.id},{name:req.body.name},function(){res.send("update pokemon")});
			

}

function deletePokemon(req,res){
	Pokemon.findByIdAndRemove(req.params.id,function(err, result){
		res.send("delete pokemon");
	});
}

function postForm(req,res){
	Pokemon.create({
		name : req.body.name
	}, function(){
		res.send("data was save");
	});
};


function postLogin(request, response, next){
    let loginStrategy = passport.authenticate('local-login',{
        successRedirect:'/home',
        failureRedirect:'/',
        failureFlash: true
    });

    return loginStrategy(request, response, next);
};

function postSignup(request, response, next){
    let signupStrategy = passport.authenticate('local-signup',{
        successRedirect:'/home',
        failureRedirect:'/signup.html',
        failureFlash: true
    });

    return signupStrategy(request, response, next);
};

function logout(req,res){
	req.logout();
	res.sendFile("/Users/stevanolie/pokedex/views/home.html");
}

module.exports.logout = logout;
module.exports.postLogin = postLogin;
module.exports.getIndex = getIndex;
module.exports.postSignup = postSignup;
module.exports.root = root;
module.exports.getForm = getForm;
module.exports.postForm = postForm;
module.exports.pokemonlist = pokemonlist;
module.exports.deletePokemon = deletePokemon;
module.exports.putPokemon = putPokemon;
module.exports.signup = signup;
