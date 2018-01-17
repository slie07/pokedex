const mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
	name: {type:String, required:true},
	weight: Number,
	height: Number,
	id:Number

});

let pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = pokemon;
