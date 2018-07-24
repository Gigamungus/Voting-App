const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secrets = {
  secret: process.env.secret || require("./config/passwords").secret,
  DBhost: process.env.DBhost || require("./config/passwords").DBhost
};
const authStrat = require("./auth_strategies/jwt-strat");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
let port = process.env.PORT || 5000;

app.use(cors());

//route functions
const createPoll = require("./routes/createPoll");
const getPoll = require("./routes/getPoll");
const getPollsWithRegex = require("./routes/getPolls");
const getPollsByName = require("./routes/getPollsByName");
const getMyPolls = require("./routes/getMyPolls");
const createUser = require("./routes/createUser");
const loginUser = require("./routes/loginUser");
const vote = require("./routes/vote");

//serve react
const path = require("path");

//body middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//authentication middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(authStrat);

//cookie middleware
app.use(cookieParser());

//serve react
app.use(express.static(path.join(__dirname, "client", "build")));

//database
mongoose.connect(
  secrets.DBhost,
  () => {
    console.log("connected to db");
  }
);

//public route for creating new polls
// may return errors
// name: message: "Path name is required"
// options: message: "must contain between 2 and 100 characters"
app.post("/api/newpoll", (req, res) => {
  createPoll(req, res);
});

//public route for retrieving information on a single poll
app.get("/api/poll/:id", (req, res) => {
  getPoll(req, res);
});

app.get("/api/polls/:name", (req, res) => {
  getPollsWithRegex(req, res);
});

app.post("/api/polls", (req, res) => {
  getPollsByName(req, res);
});

app.post("/api/mypolls", (req, res) => {
  getMyPolls(req, res);
});

//public route for creating a user
app.post("/api/createuser", (req, res) => {
  createUser(req, res);
});

//public route for logging a user in
app.post("/api/login", (req, res) => {
  // console.log("here");
  // // console.log(req.cookies);
  loginUser(req, res);
});

//temp route for posting a vote
app.post(
  "/api/vote/:optionId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    vote(req, res);
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`serving app on port ${port}`);
});
