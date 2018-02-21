const express = require("express");
const router = express.Router();
require ("../models/index"); //starts the database connection
const controllers = require("../controllers/controllers");

function authenticatedUser(req, res, next) {
if (req.isAuthenticated()) return next();
res.redirect('/');
};


router.get("/signup.html",controllers.signup);
router.get("/",controllers.root);
router.get("/form.html",authenticatedUser, controllers.getForm);
router.post("/form.html",authenticatedUser, controllers.postForm);
router.post("/signup",controllers.postSignup);
router.get("/home",authenticatedUser, controllers.getIndex);
router.post("/login",controllers.postLogin);
router.get("/logout", controllers.logout);


router.get("/pokemonlist",authenticatedUser, controllers.pokemonlist);
router.delete("/deletePokemon/:id",authenticatedUser, controllers.deletePokemon);
router.put("/putPokemon/:id",authenticatedUser, controllers.putPokemon);




module.exports = router;
