const fs = require('fs')

let data;
if (process.env.NODE_ENV === 'test') {
  // uses a different file path for testing user data
  data = fs.readFileSync('./test/testDatabase.json', 'utf-8');
} else {
  // uses the original file of the user when launching the app
  data = fs.readFileSync('../userDatabase.json', 'utf-8');
}
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
