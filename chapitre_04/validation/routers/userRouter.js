const express = require("express");
const router = express.Router();
//LIBARIES
const expressValidator = require("express-validator");
// CONTROLLERS
const usersController = require("../controllers/usersController");
  //GET
router.get("/", usersController.getAllUsers);
router.get("/", usersController.getOneUser);
router.get("/id:id", usersController.getUserByEmail);
router.get("/email/:email", usersController.getUserByEmail);
 //post
 router.post(
     "/",
     expressValidator.body("email").isEmail(),
     expressValidator.body("username").custom((value) => {
    const schema =value.length > 4 ;
    return schema;
     }),
     expressValidator.body("city").custom((value) => {
         const schema = typeof value === "string";
         return schema;
     }),
     expressValidator.body("age").custom((value) => {
         const schema = value >=18 && typeof value  === "number";
         return schema;
     }),
     expressValidator.body("city").custom((value) => {
         const schema = typeof value ==="string";
         return schema;
     }),
     (req, res)=>{
         const errors = expressValidator.validationResult(req);
         if (errors.isEmpty()){
             const newUser = req.body;
             res.json({
                 status:"ok",
                 newUser: newUser,
             });
         }else{
             console.log(errors);
             res.json({
                 status:"error",
                 message:"form is not faond",
             });
         }
     },
     usersController.newUser
 );



 module.exports = router;