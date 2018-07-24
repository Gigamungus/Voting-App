const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  let error = { error: {} };
  // console.log(req.body, req.headers);
  if (req.body.username) {
    let nameLength = req.body.username.length;
    if (nameLength > 16 || nameLength < 2) {
      error.error.userName = "username bad length";
      res.json(error);
    } else {
      Voter.findOne({ username: req.body.username }).exec((err, voter) => {
        if (err) res.send(err);
        else if (voter) {
          error.error.userName = "username taken";
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
    }
  } else {
    error.error.request = "no username found";
    res.send(error);
  }
};

module.exports = createUser;
