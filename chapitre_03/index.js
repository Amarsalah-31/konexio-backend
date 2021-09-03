const express =require("express");
const morgan =require("morgan");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const PORT =3000;
const app = express();
const upload = multer({dest:"public/uploads"});
const users = [{nama:"Ali"}, {name:"Ala"}, {name:"Alua"}];


app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
// app.use(cors());

app.get("/", (req, res) => {
    res.json({
        status: "ok",
        users: users,
    });
});

app.get("/user", upload.single("image"), (req, res) => {
    let username = req.query;
    let profilePlic = req.file;
    console.log("username is" , username);
    console.log("profile pic is", profilePlic);
    fs.renameSync(
        profilePlic.path,
        path.json(profilePlic.destination,profilePlic.originalname)
    );
    users.push(username);
    console.log(users);

    res.json({
        status:"ok",
    });
});

app.listen(PORT, () => {
    console.log('Listening on port $ {PORT}');
});