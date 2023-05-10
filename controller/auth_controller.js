const passport = require("../middleware/passport");
const userController = require("./userController").userModel;

// user database
let fs = require('fs')
let userDatabase = undefined
fs.readFile('./userDatabase.json', (err,data) => {
    if (err){
        console.log(err)
    } else {
        userDatabase = JSON.parse(data)
    }
})


let authController = {
  login: (req, res) => {
    request = req
    res.render("auth/login"), {request};
  },

  register: (req, res) => {
    request = req
    res.render("auth/register"), {request};
  },


  loginSubmit: passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/login",
  }),

  registerSubmit: (req, res) => {
    let user = {
      id: userDatabase.users.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      totalProgress: [],
      gymAccount: req.body.gymAccount,
      gymName: req.body.gymName
    };
    userDatabase["users"].push(user)
    databaseString = JSON.stringify(userDatabase)
    fs.writeFile('./userDatabase.json', databaseString, (err) =>{
      if (err){
        console.log(err)
      }
    })
    res.redirect("/login");
  },
  
  logout: (req, res) => {
    req.logout(() => res.redirect("/login"))
  }
};

module.exports = authController;
