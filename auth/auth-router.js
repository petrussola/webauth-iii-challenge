const router = require("express").Router();
const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  const user = req.body;
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

module.exports = router;
