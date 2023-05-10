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

const userModel = {
  findOne: (email) => {
    const user = userDatabase["users"].find((user) => user.email === email);
    if (user) {
      return user;
    } else {
      const user = userDatabase["gymAccounts"].find(
        (user) => user.email === email
      );
      if (user) {
        return user;
      }
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },

  findById: (id) => {
    const user = userDatabase["users"].find((user) => user.id === id);
    if (user) {
      return user;
    } else {
      const user = userDatabase["gymAccounts"].find(
        (user) => user.id === id
      );
      if (user) {
        return user;
      }
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
};

module.exports = { userDatabase, userModel };
