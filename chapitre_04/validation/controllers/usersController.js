const users =[
   { username:"Amar",
   email:"aas@go.com",
   age:50,
   city:mosceu,

   },
   {username:"ali",
   email:"shhsg@rtf.fr",
   age:60,
   city:"paris",

   },
   {
       username:"othman",
       email:"othman@gmail.com",
       age:77,
       city:"roma",
   }
];
const getAllUsers =(_req, res)=>{
    res.json({
        status:"ok",
        data: users,
    });
};

const getOneUser =(req, res) =>{
    const userName = req.params.username;
    const user = users.find((user)=>{
        return user.username.totowerCase()=== userName.totowerCase();

    });
    res.json({
        status:"ok",
        data:user,
    });
};
const getUserByEmail = (req, res) => {
    const email = req.params.email;
    const user = users.filter((user) => {
      console.log(user.mail);
      return user.email === email;
    });
    res.json({
      status: "OK",
      data: user,
    });
  };
  
  const newUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({
      status: "OK",
      newUser: newUser,
      data: users,
    });
  };
  
  module.exports = {
    getAllUsers: getAllUsers,
    getOneUser: getOneUser,
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    newUser: newUser,
  };