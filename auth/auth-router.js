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

router.post('/login', (req, res) => {
  
})

module.exports = router;
