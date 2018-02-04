const Pokemon = require("../models/pokemon");


function root(req,res){
	res.sendFile("/Users/stevanolie/pokedex/views/index.html")
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

module.exports.root = root;
module.exports.getForm = getForm;
module.exports.postForm = postForm;
module.exports.pokemonlist = pokemonlist;
module.exports.deletePokemon = deletePokemon;
module.exports.putPokemon = putPokemon;

