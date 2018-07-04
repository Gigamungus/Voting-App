const Poll = require("./../Schemas/PollSchema");
const jwt = require("jsonwebtoken");
const secret = require("./../config/passwords").secret;

const vote = (req, res) => {
  // console.log(req.headers.authorization);
  let error = { error: {} };
  jwt.verify(req.headers.authorization.split(" ")[1], secret, (err, user) => {
    if (err) res.send(err);
    else {
      // console.log(user);
      Poll.findOne({ "options._id": req.params.optionId }, (err, data) => {
        // console.log(user._id === data.voters[0]);
        if (err) res.send(err);
        else {
          if (
            data.voters.some(id => {
              return id == user._id;
            })
          ) {
            error.error = "user voted on this poll";
            res.json(error);
          } else {
            data.voters.push(user._id);
            // console.log(data.voters[0] == user._id);
            data.options = data.options.map(option => {
              return option._id == req.params.optionId
                ? Object.assign(option, {
                    count: option.count + 1
                  })
                : option;
            });
            Poll.findOneAndUpdate(
              { "options._id": req.params.optionId },
              data,
              {
                new: true
              }
            ).then(response => {
              //   console.log(response);
              res.json(response);
            });
          }
        }
      });
    }
  });
};
module.exports = vote;
