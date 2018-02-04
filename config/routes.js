const express = require("express");
const router = express.Router();
require ("../models/index"); //starts the database connection
const controllers = require("../controllers/controllers");


router.get("/",controllers.root);
router.get("/form.html",controllers.getForm);
router.post("/form.html",controllers.postForm);

router.get("/pokemonlist",controllers.pokemonlist);
router.delete("/deletePokemon/:id",controllers.deletePokemon);
router.put("/putPokemon/:id",controllers.putPokemon);




module.exports = router;
