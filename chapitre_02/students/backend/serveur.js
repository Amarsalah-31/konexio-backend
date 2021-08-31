const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3001;
// students
const students =[{name:"assad"},{name:Andy},{name:Yangchen}];
app.use(express.json());
app.use(cors());
// 
app.get((req,res,next) =>{
console.log("yes");
next();
});

// Route
app.get("/students", (req,res) =>{
    res.json({
        students,
    });
});
app.post("/studants", (req, res) => {
    const newStudents = req.body;
    console.log(newStudents);
    res.json({
        message: "this is one studant",
        newStudents,
    });
});

/// listening serveur
app.listen(PORT,() =>{
    console.log('Listening on port ${PORT}');
});