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
    gyms = req.user.gyms;
    if (req.user.gymAccount) {
      res.render("manager/gymhomepage"), { gyms };
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
      res.status(401).render("login");
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
    let exercises = database.exercises;

    // create workoutEquipmentNeededArray
    let workoutEquipmentNeededArray = [];
    for (let workout of workouts) {
      let workoutEquipmentObject = {
        name: workout.name,
        equipmentNeeded: [],
      };
      for (let e of workout.exercise_list) {
        for (let exercise of exercises) {
          if (e.toLowerCase() === exercise.exercise.toLowerCase()) {
            for (eq of exercise.equipment) {
              if (
                workoutEquipmentObject.equipmentNeeded.includes(eq) === false
              ) {
                workoutEquipmentObject.equipmentNeeded.push(eq);
              }
            }
          }
        }
      }
      workoutEquipmentNeededArray.push(workoutEquipmentObject);
    }
    ///////////////////////////////////////////////

    // create passGymArray
    let passGymArray = [];
    for (owner of req.database.gymAccounts) {
      for (let gym of owner.gyms) {
        passGymArray.push({
          name: gym.name,
          equipment: gym.equipment,
        });
      }
    }
    res.render("gym/selectworkout", {
      workouts,
      selectedWorkout,
      passGymArray,
      workoutEquipmentNeededArray,
    });
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

    // create passGymArray
    let passGymArray = [];
    for (owner of req.database.gymAccounts) {
      for (let gym of owner.gyms) {
        passGymArray.push({
          name: gym.name,
          equipment: gym.equipment,
        });
      }
    }
    /////////////////////////////////////////////

    // create workoutEquipmentNeededArray

    let workoutEquipmentNeededArray = [];

    for (let workout of workouts) {
      let workoutEquipmentObject = {
        name: workout.name,
        equipmentNeeded: [],
      };
      for (let e of workout.exercise_list) {
        for (let exercise of exercises) {
          if (e.toLowerCase() === exercise.exercise.toLowerCase()) {
            for (eq of exercise.equipment) {
              if (
                workoutEquipmentObject.equipmentNeeded.includes(eq) === false
              ) {
                workoutEquipmentObject.equipmentNeeded.push(eq);
              }
            }
          }
        }
      }
      workoutEquipmentNeededArray.push(workoutEquipmentObject);
    }

    ///////////////////////////////////////

    res.render("gym/selectworkout", {
      workouts,
      exercise_objects,
      selectedWorkout,
      passGymArray,
      workoutEquipmentNeededArray,
    });
  },
  viewAddGym: (req, res) => {
    res.render("manager/addgym");
  },
  addGym: (req, res) => {
    let newGym = {
      id: req.user.gyms.length + 1,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      equipment: [],
    };
    let gymAc = req.database.gymAccounts.find((gymAc) => {
      return gymAc.id === req.user.id;
    });
    req.user.gyms.push(newGym);
    gymAc.gyms.push(newGym);
    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/home");
  },
  deleteGym: (req, res) => {
    let gymID = Number(req.params.id);

    let gymToDelete = req.user.gyms.find(function (g) {
      return g.id == gymID;
    });
    let gymIndex = req.user.gyms.indexOf(gymToDelete);
    req.user.gyms.splice(gymIndex, 1);

    for (let gymAc of req.database.gymAccounts) {
      if (gymAc.id === req.user.id) {
        gymAc.gyms.splice(gymIndex, 1);
      }
    }
    for (let gymAc of req.database.gymAccounts) {
      if (gymAc.id === req.user.id) {
        for (let g in gymAc.gyms) {
          gymAc.gyms[g].id = parseInt(g) + 1;
        }
      }
    }

    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/home");
  },
  viewEditGym: (req, res) => {
    let gymID = req.params.id;
    let gym = req.user.gyms.find(function (gym) {
      return gym.id == gymID;
    });
    res.render("manager/editgym", { gym });
  },
  editGym: (req, res) => {
    let gymID = Number(req.params.id);

    for (let g of req.user.gyms) {
      if (g.id === gymID) {
        g.name = req.body.name;
        g.address = req.body.address;
        g.phone = req.body.phone
      }
    }

    for (let gymUser of req.database.gymAccounts) {
      if (req.user.id === gymUser.id) {
        for (let g of gymUser.gyms) {
          if (g.id === gymID) {
            g.name = req.body.name;
            g.address = req.body.address;
            g.phone = req.body.phone

          }
        }
      }
    }

    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/home");
  },
  manageGym: (req, res) => {
    let gymID = Number(req.params.id);

    let gym = req.user.gyms.find(function (gym) {
      return gym.id == gymID;
    });
    res.render("manager/equipment", { gym });
  },
  viewEditEquipment: (req, res) => {
    let gymIndex = Number(req.params.gid) - 1;
    let equipmentIndex = Number(req.params.eid) - 1;
    let equipment = req.user.gyms[gymIndex].equipment[equipmentIndex];
    let equipmentArray = [];
    for (let ex of database.exercises) {
      for (let e of ex.equipment) {
        if (equipmentArray.includes(e)) {
        } else {
          equipmentArray.push(e);
        }
      }
    }
    const conditions = ["Good", "Moderate", "Bad"];
    const gymID = Number(req.params.gid);
    res.render("manager/edit", {
      gymID,
      equipment,
      equipmentArray,
      conditions,
    });
  },
  editEquipment: (req, res) => {
    const userIndex = Number(req.user.id.substring(1)) - 1;
    const gymIndex = Number(req.params.gid) - 1;
    const equipmentIndex = Number(req.params.eid) - 1;

    req.user.gyms[gymIndex].equipment[equipmentIndex].name = req.body.name;
    req.user.gyms[gymIndex].equipment[equipmentIndex].stock = req.body.stock;
    req.user.gyms[gymIndex].equipment[equipmentIndex].condition =
      req.body.condition;
      req.database.gymAccounts[userIndex].gyms[gymIndex].equipment[
        equipmentIndex
      ].name = req.body.name;
      req.database.gymAccounts[userIndex].gyms[gymIndex].equipment[
        equipmentIndex
      ].stock = req.body.stock;
      req.database.gymAccounts[userIndex].gyms[gymIndex].equipment[
        equipmentIndex
      ].condition = req.body.condition;
      
      if (req.body.condition == "Bad") {
        req.user.gyms[gymIndex].equipment[equipmentIndex].repairNote = req.body.repairNote;
        req.database.gymAccounts[userIndex].gyms[gymIndex].equipment[
          equipmentIndex
        ].repairNote = req.body.repairNote;
      } else {
        req.user.gyms[gymIndex].equipment[equipmentIndex].repairNote = ""
        req.database.gymAccounts[userIndex].gyms[gymIndex].equipment[
          equipmentIndex
        ].repairNote = "";
      }
    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/gym/" + req.params.gid);
  },
  deleteEquipment: (req, res) => {
    let gymIndex = Number(req.params.gid) - 1;
    let equipmentIndex = Number(req.params.eid) - 1;
    req.user.gyms[gymIndex].equipment.splice(equipmentIndex, 1);

    for (let gymAc of req.database.gymAccounts) {
      if (gymAc.id === req.user.id) {
        gymAc.gyms[gymIndex].equipment.splice(equipmentIndex, 1);
      }
    }
    for (let gymAc of req.database.gymAccounts) {
      if (gymAc.id === req.user.id) {
        for (let e in gymAc.gyms[gymIndex].equipment) {
          gymAc.gyms[gymIndex].equipment[e].id = parseInt(e) + 1;
        }
      }
    }

    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/gym/" + req.params.gid);
  },
  viewAddEquipment: (req, res) => {
    let gymID = Number(req.params.id);

    let gym = req.user.gyms.find(function (gym) {
      return gym.id == gymID;
    });

    let equipmentArray = [];
    for (let ex of database.exercises) {
      for (let e of ex.equipment) {
        if (equipmentArray.includes(e)) {
        } else {
          equipmentArray.push(e);
        }
      }
    }
    res.render("manager/add", { gym, equipmentArray });
  },
  addEquipment: (req, res) => {
    let gymIndex = Number(req.params.id) - 1;

    let newEquipment = {
      id: req.user.gyms[gymIndex].equipment.length + 1,
      name: req.body.name,
      stock: req.body.stock,
      condition: req.body.condition
    };
    let gymAc = req.database.gymAccounts.find((gymAc) => {
      return gymAc.id === req.user.id;
    });
    req.user.gyms[gymIndex].equipment.push(newEquipment);
    gymAc.gyms[gymIndex].equipment.push(newEquipment);
    let dataString = JSON.stringify(req.database);
    fs.writeFileSync("../userDatabase.json", dataString);
    res.redirect("/gym/" + req.params.id);
  },
  viewGyms: (req, res) => {
    const gyms = []
    for (const gymAccount of req.database.gymAccounts) {
      for (const gym of gymAccount.gyms) {
        gym["manager"] = gymAccount.name
        gyms.push(gym)
      }
    }
    console.log(gyms)
    res.render("gym/gyms" , { gyms })
  }
};

module.exports = gymController;
