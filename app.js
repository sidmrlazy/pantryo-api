const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./Connection/db.js");
var usersRouter = require("./routes/index.html");
const app = express();
// const port = process.env.PORT || 8000;

const port = process.env.PORT || 8000;
// app.set("port", process.env.PORT || 8000);

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", usersRouter);
// app.get("/student", (req, res) => {
//   let sql = "SELECT * FROM student";
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({ status: 200, error: null, response: results }));
//   });
// });

// set port, listen for requests
// app.listen(4000, () => {
//   console.log("Server is running on port 4000.");
// });
// app.listen(8000, () => {
// do not add localhost here if you are deploying it
// console.log("server listening to port " + port);
// });
// app.listen(8000);

app.listen(port, () => {
  console.log(`Connection Established on PORT: ${port}`);
});
