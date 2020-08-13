const router = require("express").Router();
const db = require("../models");

router.get("/api/employees/:category", (req, res) => {
  db.Employees.findOne()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;