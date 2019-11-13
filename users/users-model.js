const db = require("../database/db-config");

module.exports = {
  insertUser
};

function findById(id) {
  return db("users").where({ id });
}

function insertUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}
