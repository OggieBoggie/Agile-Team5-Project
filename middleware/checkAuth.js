const fs = require('fs')

data = fs.readFileSync('../userDatabase.json', 'utf-8')
parsedData = JSON.parse(data)

module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/home");
  },
  sessionUserDatabase: function (req, res, next) {
    req.database = parsedData;
    next()
  }
};
