const express = require("express");
const app = express();
const port =3002;
var dataPokemons = require("./dataPokmons.js");

///route home office 

app.get("/", (req,res) => {
    res.send("API pokemons");

})

//route list pokemons

app.get("/pokemons/",(req,res) =>{
    res.send(dataPokemons.results);
})

///route pokemon id 
app.get("/pokemon/:id", (req, res) => {
    let pokemonId = req.params.id;

})

///ecoute la route

app.listen(port, () => {
    console.log('Listening on port ${port}');
})
