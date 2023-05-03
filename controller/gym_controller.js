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
        let selectedWorkout = undefined
        let workouts = database.workouts
        res.render("gym/selectworkout", {workouts, selectedWorkout})
    },
    displayWorkout: (req, res) => {
        let workouts = database["workouts"]
        let selectedWorkout = database.workouts.find( workout => {return workout.id == req.params.id})
        res.render("gym/selectworkout", {workouts, selectedWorkout})
    }
}

module.exports = gymController;
