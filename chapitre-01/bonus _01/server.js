const express = require("express");
const { get } = require("http");
const app = express();
const port = 3001;
var responseAPICountries = require("./dataCountries.js");
  ///routr home office

  app.get("/", (req,res) => {
      res.send(APICountries)
  });

  ///route responseAPICountries

  app.get("/ countries/", (req, res)=>{
      res.send(responseAPICountries);
  });
  ///ecoute serveur
  app.listen(port,() =>{
      console.log('Listening on port ${port}');
  });