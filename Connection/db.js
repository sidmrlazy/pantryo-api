const mysql = require("mysql");

// Create a connection to the database
const conn = mysql.createConnection({
  host: "localhost",
  user: "u891777119_pantryo",
  password: "u891777119_Pantryo",
  database: "u891777119_pantryo",
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Connection Established!");
});

module.exports = conn;
