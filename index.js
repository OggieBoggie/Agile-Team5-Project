const express = require("express");
const path = require("path");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const gymController = require("./controller/gym_controller");
const app = express();
const fs = require('fs')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(expressLayouts);

let data;
if (process.env.NODE_ENV === 'test') {
  // uses a different file path for testing user data
  data = fs.readFileSync('./test/testDatabase.json', 'utf-8');
} else {
  // uses the original file of the user when launching the app
  data = fs.readFileSync('../userDatabase.json', 'utf-8');
}

parsedData = JSON.parse(data)


app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,

      },
      userDB: parsedData
    })
  );

// Authentication
const authController = require("./controller/auth_controller");
const { ensureAuthenticated, forwardAuthenticated, sessionUserDatabase } = require("./middleware/checkAuth");
const passport = require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.get("/", gymController.index)
app.get("/home",ensureAuthenticated, gymController.home)
app.get("/workout",ensureAuthenticated, gymController.randomWorkout)
app.get("/progress",ensureAuthenticated, gymController.progress)
app.get("/progress/new", gymController.new)
app.get("/progress/calendar",ensureAuthenticated, gymController.calendar)
app.post("/progress/",sessionUserDatabase, gymController.create);
app.get("/selectworkout",ensureAuthenticated, sessionUserDatabase,gymController.selectWorkout)
app.get("/selectworkout/:id",ensureAuthenticated, sessionUserDatabase,gymController.displayWorkout)
app.get("/gyms",ensureAuthenticated, sessionUserDatabase,gymController.viewGyms)

// User Profile Routes
app.get("/user/:id", ensureAuthenticated, sessionUserDatabase, gymController.userPage)
app.post("/user/:id", ensureAuthenticated, sessionUserDatabase, gymController.addMyGym)
app.get("/user/:id/myGym", ensureAuthenticated, sessionUserDatabase, gymController.manageMyGym)
app.post("/user/:id/myGym", ensureAuthenticated, sessionUserDatabase, gymController.editMyGym)
app.get("/user/:id/myGym/delete/:equipment", ensureAuthenticated, sessionUserDatabase, gymController.deleteMyGym)




// Manager Routes
app.get("/addgym", ensureAuthenticated,sessionUserDatabase, gymController.viewAddGym)
app.post("/addgym", ensureAuthenticated,sessionUserDatabase, gymController.addGym)
app.get("/gym/edit/:id", ensureAuthenticated,gymController.viewEditGym)
app.post("/gym/edit/:id", ensureAuthenticated,sessionUserDatabase, gymController.editGym)
app.get('/gym/delete/:id', ensureAuthenticated,sessionUserDatabase,gymController.deleteGym)
app.get("/gym/:id", ensureAuthenticated,sessionUserDatabase,gymController.manageGym)
app.get("/gym/:id/addequipment", ensureAuthenticated,gymController.viewAddEquipment)
app.get('/gym/:gid/equipment/delete/:eid', ensureAuthenticated,sessionUserDatabase,gymController.deleteEquipment)
app.get("/gym/:gid/equipment/:eid", ensureAuthenticated,gymController.viewEditEquipment)
app.post("/gym/:gid/equipment/:eid",ensureAuthenticated,sessionUserDatabase, gymController.editEquipment)
app.post("/gym/:id/addequipment", ensureAuthenticated,sessionUserDatabase, gymController.addEquipment)

// Auth Routes
app.get("/register",forwardAuthenticated,sessionUserDatabase, authController.register);
app.get("/login", forwardAuthenticated,sessionUserDatabase , authController.login);
app.post("/register", sessionUserDatabase,authController.registerSubmit);
app.post("/login", sessionUserDatabase,authController.loginSubmit);
app.get("/logout", sessionUserDatabase,authController.logout);

const server = app.listen(3000, function () {
    console.log(
      "Server running. Visit: localhost:3000/home in your browser 🚀"
      );
    });


module.exports = {app, server};
