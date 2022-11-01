const dbConfig = require("./app/config/db.config.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:5500"
  // origin: "http://localhost:3000/"
};

app.use(cors(corsOptions));

// app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(express.static('app/public'));
// app.use('/static', express.static(path.join(__dirname, "/public")));

app.use(bodyParser.json());
const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json(" welcom to apod");
});

require("./app/routes/apod.routes")(app);

const PORT = dbConfig.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running ${PORT}.`);
});
