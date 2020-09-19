const router = require("express").Router();
const restricted = require("./helpers/restricted-middleware");
const Users = require("./users-model");

router.get("/", restricted, (req, res) => {
  const { department } = req.decodedToken;
  Users.findUserBy({ department })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(400)
        .json({ message: `There is an error getting users: ${error.message}` });
    });
});

module.exports = router;
