
// DEPENDENCIES
//=======================================
var mysql = require("mysql");
//=======================================


// CONNECTION
//=======================================
// The connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password:"root",
    database:"food_db"
  })
}

// Making connection
connection.connect(function (err){
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//=======================================


// EXPORTS
//=======================================
// Connection for ORM to use
module.exports = connection;
//=======================================
