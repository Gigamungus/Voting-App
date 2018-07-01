const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");

const loginUser = (req, res) => {
  Voter.findOne({ username: req.body.username }).exec((err, voter) => {
    if (!voter) res.status(404).redirect("/login");
    else {
      bcrypt.compare(req.body.password, voter.password, (err, match) => {
        if (err) res.send(err);
        else if (!match) res.status(404).redirect("/login");
        else res.send(voter);
      });
    }
  });
};

module.exports = loginUser;
