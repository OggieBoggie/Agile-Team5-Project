const express = require("express");
const path = require("path");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const gymController = require("./controller/gym_controller");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(expressLayouts);

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
    })
  );

// Authentication
const authController = require("./controller/auth_controller");
const { ensureAuthenticated, forwardAuthenticated } = require("./middleware/checkAuth");
const passport = require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.get("/", gymController.index)
app.get("/home", ensureAuthenticated,gymController.home)
app.get("/workout", ensureAuthenticated, gymController.workout)
app.get("/progress", ensureAuthenticated,gymController.progress)
app.get("/selectworkout", ensureAuthenticated,gymController.selectworkout)
app.get("/selectworkout/:id", ensureAuthenticated,gymController.displayWorkout)
app.get("/calendar", ensureAuthenticated,gymController.calendar)

// Auth Routes
app.get("/register", authController.register);
app.get("/login", forwardAuthenticated, authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit); 
app.get("/logout", authController.logout);

app.listen(3000, function () {
    console.log(
      "Server running. Visit: localhost:3000/home in your browser 🚀"
      );
    });
    