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
        let exercises = database["exercises"]
        let workouts = database["workouts"]
        let selectedWorkout = database.workouts.find( workout => {return workout.id == req.params.id})
        let exercise_objects = []
        for (let e of exercises) {
            if (selectedWorkout.exercise_list.includes(e.exercise)) {
                exercise_objects.push(e)
            }
        }
        res.render("gym/selectworkout", {workouts, exercise_objects, selectedWorkout})
    }
}

module.exports = gymController;
