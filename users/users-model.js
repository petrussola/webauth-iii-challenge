const db = require("../database/db-config");

module.exports = {
  insertUser,
  findUserBy
};

function findUserBy(filter) {
  return db("users").where(filter);
}

function insertUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
