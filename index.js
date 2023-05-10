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

data = fs.readFileSync('../userDatabase.json', 'utf-8')
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
app.get("/selectworkout",ensureAuthenticated, gymController.selectWorkout)
app.get("/selectworkout/:id",ensureAuthenticated, gymController.displayWorkout)

// Auth Routes
app.get("/register",sessionUserDatabase, authController.register);
app.get("/login", sessionUserDatabase ,forwardAuthenticated, authController.login);
app.post("/register", sessionUserDatabase,authController.registerSubmit);
app.post("/login", sessionUserDatabase,authController.loginSubmit);
app.get("/logout", sessionUserDatabase,authController.logout);

app.listen(3000, function () {
    console.log(
      "Server running. Visit: localhost:3000/home in your browser 🚀"
      );
    });
    
