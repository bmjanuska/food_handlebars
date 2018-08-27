// DEPENDENCIES
//=======================================
// Import MySQL connection
var orm = require("../config/orm.js");
//=======================================


// FUNCTIONS
//=======================================
// Create code that will call the ORM functions using food specific input from the ORM
var food = {
  selectAll: function(cb) {
    orm.selectAll("food", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("food", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("food", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
//=======================================


// EXPORTS
//=======================================
// Database functions for the controller ( *something* controller.js )
module.exports = food;
//=======================================
