let database = require("../database");

let gymController = {
    index: (req, res) => {
        res.render("gym/index", {database})
    },
    home: (req, res) => {
        res.render("gym/homepage")
    },
    workout: (req, res) => {
        res.render("gym/workoutpage")
    },
    progress: (req, res) => {
        res.render("gym/progress")
    }
}

module.exports = gymController;
