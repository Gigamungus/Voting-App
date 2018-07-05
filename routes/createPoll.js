const Poll = require("./../Schemas/PollSchema");
const Voter = require("./../Schemas/VoterSchema");
const jwt = require("jsonwebtoken");
const secret = require("./../config/passwords").secret;

const createPoll = (req, res) => {
  // console.log(req.body);

  let error = {};

  let options = req.body.options
    .filter(option => option)
    .map(option => ({ name: option }));
  // console.log(options);

  let newPoll = new Poll({
    name: req.body.title,
    options: options
  });

  newPoll
    .save()
    .then(poll => {
      if (req.body.jwt) {
        jwt.verify(req.body.jwt, secret, (err, token) => {
          if (err) console.log(err);
          else {
            // console.log(token, "still okay");
            Voter.findByIdAndUpdate(
              token._id,
              {
                $push: { createdPolls: poll._id }
              },
              (err, voter) => {
                // console.log("ehhh?");
                // console.log(poll._id);
                if (err) console.log(err);
                else res.json(poll._id);
                // console.log("doubt it");
              }
            );
          }
        });
      } else {
        console.log("messed it");
        res.json(poll._id);
      }
    })
    .catch(err => console.log(err));
};

module.exports = createPoll;
