const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  Voter.findOne({ username: req.body.username }).exec((err, voter) => {
    if (err) res.send(err);
    else if (voter) res.send("username taken");
    else {
      const salt = bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log(err);
        else
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) console.log(err);
            else Voter.create({ username: req.body.username, password: hash });
          });
      });
      res.redirect("/login");
    }
  });
};

module.exports = createUser;
