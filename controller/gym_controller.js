let database = require("../equipment");

let gymController = {
    index: (req, res) => {
        res.render("gym/index", {database})
    },
    home: (req, res) => {
        res.render("gym/homepage")
    },
    workout: (req, res) => {
        res.render("gym/workoutpage")
    }
}

module.exports = gymController;