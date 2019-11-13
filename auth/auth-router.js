// IMPORT DEPENDENCIES

const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.insertUser(user)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Could not register you: ${error.message}` });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findUserBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}` });
      } else {
        res.status(401).json({ message: `wrong credentials` });
      }
    })
    .catch(error => {
      res
        .status(401)
        .json({ message: `Could not log you in: ${error.message}` });
    });
});

module.exports = router;
