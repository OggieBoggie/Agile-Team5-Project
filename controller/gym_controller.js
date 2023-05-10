let database = require("../database");

// user database
let fs = require("fs");
let userDatabase = undefined;
fs.readFile("./userDatabase.json", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        userDatabase = JSON.parse(data);
    }
});

let gymController = {
    index: (req, res) => {
        let equipment = database["equipment"];
        res.render("gym/index", { equipment });
    },
    home: (req, res) => {
        request = req;
        gym = req.user
        if (req.user.gymAccount) {
            res.render("gym/gymhomepage"), { gym }
        } else {
            res.render("gym/homepage"), { request };
        }
    },
    randomWorkout: (req, res) => {
        //     let randomWorkoutIDList = []
        //     for (index in '01234') {
        //         let nextNum = false

        //         while (nextNum === false) {

        //         let RandWorkoutID =  Math.round((Math.random() * (20 - 1)) + 1)

        //         if (randomWorkoutIDList.includes(RandWorkoutID) === false) {
        //             randomWorkoutIDList.push(RandWorkoutID)
        //             nextNum = true
        //         }
        //     }
        // }
        // console.log(randomWorkoutIDList)
        // let randomWorkoutList = []
        // for (let e of database.exercises){
        //     if (randomWorkoutIDList.includes(e.id)){
        //         randomWorkoutList.push(e)
        //     }
        // }
        let randomWorkoutID = Math.round(
            Math.random() * database.workouts.length - 1 + 1
        );
        randomWorkout = database.workouts.find((workout) => {
            return workout.id === randomWorkoutID;
        });
        let randomWorkoutList = [];
        for (let e of database.exercises) {
            if (randomWorkout.exercise_list.includes(e.exercise)) {
                randomWorkoutList.push(e);
            }
        }
        console.log(randomWorkoutList);
        res.render("gym/workoutpage", { randomWorkoutList });
    },
    progress: (req, res) => {
        const progressReports = req.user.totalProgress || [];
        res.render("gym/progress", { progressReports });
    },
    new: (req, res) => {
        if (!req.user) {
            res.render("../views/login");
        } else {
            res.render("gym/create");
        }
    },

    create: (req, res) => {
        if (!req.user) {
            return res.render("../views/login");
        }

        if (!req.user.totalProgress) {
            req.user.totalProgress = [];
        }

        let progressReport = {
            date: req.body.date,
            type: req.body.type,
            details: req.body.details,
        };

        req.user.totalProgress.push(progressReport);
        res.render("gym/progress", { progressReports: req.user.totalProgress });
    },
    calendar: (req, res) => {
        res.render("gym/calendar")
    },
    selectWorkout: (req, res) => {
        let selectedWorkout = undefined;
        let workouts = database.workouts;
        res.render("gym/selectworkout", { workouts, selectedWorkout });
    },
    displayWorkout: (req, res) => {
        let exercises = database["exercises"];
        let workouts = database["workouts"];
        let selectedWorkout = database.workouts.find((workout) => {
            return workout.id == req.params.id;
        });
        let exercise_objects = [];
        for (let e of exercises) {
            if (selectedWorkout.exercise_list.includes(e.exercise)) {
                exercise_objects.push(e);
            }
        }
        res.render("gym/selectworkout", {
            workouts,
            exercise_objects,
            selectedWorkout,
        });
    },
};

module.exports = gymController;
