const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");
const secret = require("./../config/passwords").secret;
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  console.log(req.body);
  res.set("Access-Control-Allow-Origin", "*");
  Voter.findOne({ username: req.body.username }).exec((err, voter) => {
    if (err) {
    //   console.log("here");
      res.json(err);
    } else if (!voter) {
      //bad username
      res.json({ error: "credentials not recognized" });
    } else {
      bcrypt.compare(req.body.password, voter.password, (err, match) => {
        if (err) res.send(err);
        else if (!match) {
          //bad password
          res.json({ error: "credentials not recognized" });
        } else {
          //   console.log(new Object(voter));
          jwt.sign(voter._doc, secret, (err, token) => {
            if (err) console.log(err);
            else res.status(200).json({ token });
          });
        }
      });
    }
  });
};

module.exports = loginUser;
