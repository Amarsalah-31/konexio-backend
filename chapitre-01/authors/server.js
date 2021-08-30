const express = require("express");
const app = express();
var authors = express(".authors.js");

///exercice 01 home office

app.get("/",(req, res)=>{
    res.send("Authors API");
});



///exercice 02 ruets auteures 

app.get("/authors/:authorId/books/",(req,res) => {
    let authorId = req.params.authorId;
    let author = authors[authorId -1];
    res.send('${author.books.join(",")}');
});


/// exercice 03 routes livres

app.get("/authors/:authorId/books/", (req,res) => {
    let authorId = req.params.authorId;
    let author = authors[authorId -1];
    res.send('${author.books.join(",")}');
});

////exercice 04 routes json
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