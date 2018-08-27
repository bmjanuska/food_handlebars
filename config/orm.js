// DEPENDENCIES
//=======================================
// Import MySQL connection
var connection = require("../config/connection.js");
//=======================================


// FUNCTIONS
//=======================================
// Helper function for SQL
// To write query we need 3 question marks
// Function willl loop through and create and array of question marks and turn it into a string

function printQuestionMarks(num) {
  var arr = [];

  for(var i = 0; i < num; i++){
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop though gkey and push values into a string int arr
  for (var key in ob) {
    var value = ob[key];

    if(Object.hasOwnProperty.call(ob, key)){
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}
//=======================================

// OBJ -> SQL FUNC
//=======================================
var orm ={
//
selectAll: function(tableInput, cb){
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function (err,result){
    if (err) {
      throw err;
    }
    cb(result);
  });
},

insertOne: function(table, cols, vals, cb) {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, function(err, result){
    if (err) {
      throw err;
    }
    cb(result);
  });
},

//
updateOne: function(table, objColVals, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result){
    if (err) {
      throw err;
    }
    cb(result);
  });
}

};
//=======================================


// EXPORTS
//=======================================
// orm object for the model ( our js )
module.exports = orm
//=======================================
