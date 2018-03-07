const expect = require('chai').expect;
const request = require('request');


const Pokemon = require('../models/pokemon');
const User = require('../models/user');



describe("pokemon", function(){
    let requestResponse, URL='http://localhost:3000/';
    let pokemon = new Pokemon();
    let user = new User();
    before(function(done){
        request(URL, function(error, response){
            requestResponse = response;
            done();
        });
        pokemon.name = 'pikachu';
        user.email = 'liestevano@gmail.com';
        user.password = 'password';
        
    })
    it("Response should return 200-OK", function(){
        expect(requestResponse.statusCode).to.eq(200);
    });
    it("Pokemon should have a name", function(){
       expect(pokemon.name).to.eq('pikachu');
    });
    it("Response body should not be empty", function(){
        expect(requestResponse.body).to.not.empty;
    });
    it("User should have an email", function(){
        expect(user.email).to.eq('liestevano@gmail.com');
    });
    it("User should have a password", function(){
        expect(user.password).to.eq('password');
    });
});