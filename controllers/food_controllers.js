// DEPENDENCIES
//=======================================
var express = require("express");
// Import the model (food.js) to use its database functions.
var food = require("../models/food.js")
var router = express.Router();
//=======================================


// ROUTES
//=======================================
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  food.selectAll(function(data) {
    var hbsObject = {
      food: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/food", function(req, res) {
  food.insertOne([
    "food_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/food/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//=======================================



// EXPORTS
//=======================================
// Export routs for server.js to use
module.exports = router;
//=======================================
