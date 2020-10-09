var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/food.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  cat.all(function (data) {
    var hbsObject = {
      foods: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", function (req, res) {
  cat.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
module.exports = router;
