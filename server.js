const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secrets = require("./config/passwords");
const bodyParser = require("body-parser");
const port = 5000;

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

app.post("/api/newpoll", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:3000/");
});
// app.use("localhost:3000/api", api)

app.listen(port, () => {
  console.log(`serving app on port ${port}`);
});
