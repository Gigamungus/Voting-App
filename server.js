const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secrets = require("./config/passwords");
const bodyParser = require("body-parser");
const port = 5000;
const createPoll = require("./routes/createPoll");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  secrets.DBhost,
  () => {
    console.log("connected to db");
  }
);

// may return errors
// name: message: "Path namme is required"
// options: message: "must contain between 2 and 100 characters"
app.post("/api/newpoll", (req, res) => {
  createPoll(req, res);
});

app.listen(port, () => {
  console.log(`serving app on port ${port}`);
});
