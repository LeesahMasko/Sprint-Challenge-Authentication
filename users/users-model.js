const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
};

function add(user) {
  return db("users").insert(user)
}

function find() {
  return db("users")
}

function findBy(filter) {
  // console.log("filter", filter);
  return db("users")
    .where(filter)
}
