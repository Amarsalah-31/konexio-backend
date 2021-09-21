const express = require("express");
const app = express();
const dotenv =require("dotenv");
dotenv.config({
    path: "/config.env",
});
const mongoose =require('mongoose');
//middleware


mongoose
.connect(process.env.DB, {
    useNewUrlParser:true,
})
.then(()=>{
    console.log('connected to mongoDB !')
});

app.use(express.json());



///mongoose 
const AuthorsSchema = new mongoose.Schema({
    name: {type:String,
        required: true,
    },
    nationality: String,
    books:Array,

});
 
//mongoose * modéle
const Author = mongoose.model("Author", AuthorsSchema);

app.get("/", (_req, res)=>{
    res.json({

        status:"ok",
        message:"Authors Api",
    });
});
app.get("/authors/:id/", async (req, res) => {
    let author = await Author.findById(req.params.id);
    res.json({
      status: "OK",
      data: author,
    });
  });
  
  app.get("/authors/:id/books/", async (req, res) => {
    let author = await Author.findById(req.params.id);
    res.json({
      status: "OK",
      data: author.books,
    });
  });
  
  // POST
  app.post("/authors", async (req, res) => {
    await Author.create(req.body);
  
    res.json({
      status: "Author created",
    });
  });
  
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
