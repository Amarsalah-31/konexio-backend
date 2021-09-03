const express = require("express");
const app = express();
var authors = express(".authors.js");

///exercice-01

app.get("/",(req, res)=>{
    res.send("Authors API");
});



///exercice_02

app.get("/authors/:authorId/books/",(req,res) => {
    let authorId = req.params.authorId;
    let author = authors[authorId -1];
    res.send('${author.books.join(",")}');
});


/// exercice_03

app.get("/authors/:authorId/books/", (req,res) => {
    let authorId = req.params.authorId;
    let author = authors[authorId -1];
    res.send('${author.books.join(",")}');
});

////exercice_04
app.get("/json/authors/:id",(req,res) => {
    let id =res.params.id;
    let author = authors[id -1];
    res.json({
        books:author.books
    })
})
app.listen(3000,() =>{
    console.log("listening on port 3000");
});