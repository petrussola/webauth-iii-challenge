// IMPORT DEPENDENCIES

const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token: token
        });
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

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: "1d"
  };
  const result = jwt.sign(payload, process.env.JWT_SECRET, options);

  return result;
}

module.exports = router;
