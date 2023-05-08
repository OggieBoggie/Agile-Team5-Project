module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  },
  forwardAuthenticated: function (req, res, next) {
    // console.log(req.user)
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/home");
  },
};
