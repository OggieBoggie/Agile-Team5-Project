let database = require("../equipment");

let gymController = {
    index: (req, res) => {
        let equipment = database["equipment"]
        res.render("gym/index", {equipment})
    },
    home: (req, res) => {
        res.render("gym/homepage")
    },
    workout: (req, res) => {
        let workouts = database["workouts"]
        res.render("gym/workoutpage", {workouts})
    },
    progress: (req, res) => {
        res.render("gym/progress")
    }
}

module.exports = gymController;
