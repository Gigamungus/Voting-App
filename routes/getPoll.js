const Poll = require("./../Schemas/PollSchema");
const jwt = require("jsonwebtoken");
const secrets = {
  secret: process.env.secret || require("./../config/passwords").secret,
  DBhost: process.env.DBhost || require("./../config/passwords").DBhost
};

const secret = secrets.secret;
const Voter = require("./../Schemas/VoterSchema");

const getPoll = (req, res) => {
  if (req.headers.jwt === "undefined") req.headers.jwt = undefined;
  // console.log(Boolean(req.headers.jwt), req.headers.jwt);
  let userData;
  let userVoted = false;
  if (req.headers.jwt) {
    jwt.verify(req.headers.jwt, secret, (err, data) => {
      // console.log(data, "here");
      if (err) {
        // console.log(err);
        res.send(err);
      } else userData = data;
    });
  }

  // console.log(Boolean(userData));

  Poll.findOne({ _id: req.params.id })
    .then(poll => {
      // console.log(userData._id);
      if (userData) {
        Voter.findById(userData._id).then(voter => {
          // console.log(voter.votedPolls);
          if (
            voter.votedPolls.some(votedPollId => {
              // console.log(
              //   String(votedPollId),
              //   poll._id,
              //   String(votedPollId) === String(poll._id)
              // );
              return String(votedPollId) === String(poll._id);
            })
          ) {
            userVoted = true;
            // console.log(userVoted);
          }
          // res.set("Access-Control-Allow-Origin", "*");
          let test = Object.assign({}, poll._doc, {
            userVoted
          });
          // console.log(test);
          // console.log(poll);
          res.json(test);
        });
      } else {
        // res.set("Access-Control-Allow-Origin", "*");
        let test = Object.assign({}, poll._doc, { userVoted });
        // console.log(test);
        // console.log(poll);
        res.json(test);
      }
    })
    .catch(err => console.log(err));
};

module.exports = getPoll;
