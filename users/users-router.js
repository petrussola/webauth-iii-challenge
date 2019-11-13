const router = require("express").Router();
const restricted = require("./helpers/restricted-middleware");

router.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from dummy endpoint` });
});

module.exports = router;
