const express = require("express");
const PORT = 3000;
const app = express();
const usersRouter = require("./routers/userRouter");
//Librariries

const expressValidator = require("express-validator");
const passwordValidator = require("password-validator");

//Middlewares
app.use(morgan("tiny"));
app.use(express.json());
//GET
app.get("/",(_req, res) => {
    res.json({
        status: "ok",
        message:"",
    });
});

//ROUTES
app.use("/users", usersRouter);
app.listen(PORT, () =>{
    console.log('Listening on port ${PORT}')
});
