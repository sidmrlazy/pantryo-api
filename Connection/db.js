const mysql = require("mysql");
const https = require("https");
// Create a connection to the database
const conn = mysql.createConnection({
  host: "185.224.138.175",
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
