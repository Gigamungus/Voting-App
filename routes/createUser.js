const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  let error = {};
  //   console.log(req.body.username);
  Voter.findOne({ username: req.body.username }).exec((err, voter) => {
    if (err) res.send(err);
    else if (voter) {
      error.userName = "username taken";
      res.json(error);
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) res.send(err);
        else
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) res.send(err);
            else
              Voter.create(
                { username: req.body.username, password: hash },
                (err, doc) => {
                  if (err) res.send(err);
                  else res.json(doc);
                }
              );
          });
      });
    }
  });
};

module.exports = createUser;
