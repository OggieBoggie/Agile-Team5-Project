let database = require("../equipment");

let gymController = {
    home: (req, res) => {
        res.render("gym/index", {database})
    }
}

module.exports = gymController;
