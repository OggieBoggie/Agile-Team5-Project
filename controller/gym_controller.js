let database = require("../database");


let gymController = {
    index: (req, res) => {
        let equipment = database["equipment"]
        res.render("gym/index", {equipment})
    },
    home: (req, res) => {
        res.render("gym/homepage")
    },
    workout: (req, res) => {
        res.render("gym/workoutpage")
    },
    progress: (req, res) => {
        res.render("gym/progress")
    },
    selectworkout: (req, res) => {
        let workouts = database["workouts"]
        res.render("gym/selectworkout", {workouts})
    }
}

module.exports = gymController;
