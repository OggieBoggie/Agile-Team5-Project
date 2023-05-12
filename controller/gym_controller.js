let database = require("../database");

// user database
let fs = require("fs");
let userDatabase = undefined;
fs.readFile("../userDatabase.json", (err, data) => {
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
    console.log(req.user);
    gym = req.user;
    if (req.user.gymAccount) {
      res.render("manager/gymhomepage"), { gym };
    } else {
      res.render("gym/homepage"), { request };
    }
  },
  randomWorkout: (req, res) => {
    let randomWorkoutID = Math.round(
      Math.random() * (database.workouts.length - 1) + 1
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
    if (!req.user.progress) {
      req.user.progress = [];
    }
    const progressReports = req.user.progress;
    res.render("gym/progress", { progressReports });
  },
  new: (req, res) => {
    if (!req.user) {
      res.render("login");
    } else {
      const currentDate = new Date().toISOString().slice(0, 10);
      const exercises = database["exercises"];
      res.render("gym/create", { exercises, currentDate });
    }
  },

  create: (req, res) => {
    if (!req.user) {
      return res.render("../views/login");
    }
    user = req.user;
    userDatabase = req.database;

    userdb = userDatabase.users.find((user) => {
      return user.id === req.user.id;
    });

    let progressReport = {
      date: req.body.date,
      type: req.body.type,
      details: req.body.details,
    };

    req.user.progress.push(progressReport);
    userdb.progress = req.user.progress;

    userDataString = JSON.stringify(userDatabase);

    fs.writeFile("../userDatabase.json", userDataString, (err) => {
      if (err) {
      } else {
        res.render("gym/progress", { progressReports: req.user.progress });
      }
    });
  },

  calendar: (req, res) => {
    const progressReports = req.user.progress;
    res.render("gym/calendar", { progressReports });
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
  equipment: (req, res) => {
    equipment = req.user.equipment;
    console.log(req.user.equipment);
    res.render("manager/equipment"), { equipment };
  },
  viewEditEquipment: (req, res) => {
    let equipmentID = req.params.id;
    let equipment = req.user.equipment.find(function (equipment) {
      return equipment.id == equipmentID;
    });
    res.render("manager/edit", { equipment });
  },
  editEquipment: (req, res) => {
    // implement
  },
  viewAddEquipment: (req, res) => {
    res.render("manager/add");
  },
  addEquipment: (req, res) => {
    // implement
  },
};

module.exports = gymController;
