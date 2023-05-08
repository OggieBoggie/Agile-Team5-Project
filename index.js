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

app.get("/", gymController.index)
app.get("/home", gymController.home)
app.get("/workout", gymController.randomWorkout)
app.get("/progress", gymController.progress)
app.get("/selectworkout", gymController.selectWorkout)
app.get("/selectworkout/:id", gymController.displayWorkout)
app.get("/calendar", gymController.calendar)

app.listen(3000, function () {
    console.log(
      "Server running. Visit: localhost:3000/home in your browser 🚀"
      );
    });
    