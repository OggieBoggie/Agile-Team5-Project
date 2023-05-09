let database = require("../database");
const passport = require("../middleware/passport");
const userController = require("./userController").userModel;

// user database
let fs = require('fs')
let userDatabase = undefined
fs.readFile('./userDatabase.json', (err,data)=>{
    if (err){
        console.log(err)
    } else {
        userDatabase = JSON.parse(data)
    }
})



let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },


  loginSubmit: passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/login",
  }),

  registerSubmit: (req, res) => {
    let user = {
      id: database.users.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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
