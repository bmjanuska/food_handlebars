// DEPENDENCIES
//=======================================
var express = require("express");
// Import the model (food.js) to use its database functions.
var food = require("../models/food.js")
var router = express.Router();
//=======================================


// ROUTES
//=======================================
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
  console.log(req.body);
  food.insertOne([
    "food_name"
  ], [
    req.body.food_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/food/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.updateOne({
    devoured: true
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
