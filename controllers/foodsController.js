var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var food = require("../models/foodModels.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  food.all(function(data) {
    var hbsObject = {
      foods: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", function(req, res) {
  food.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/foods/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});
// Delete Route
router.delete("/api/foods/:id", (req, res) => {
  console.log("DELETE HIT!");

  const foodId = req.params.id;

  console.log(foodId);

  food.remove(foodId, function() {
    console.log("food id " + foodId + " was removed!");

    res.status(200).end();
  });
});
// Export routes for server.js to use.
module.exports = router;
