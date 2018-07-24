const Polls = require("./../Schemas/PollSchema");

const getPollsByName = (req, res) => {
  // console.log(req.body);
  // for (let thing in req) console.log(thing);
  // console.log(req.connection.parser);
  let error = { error: {} };
  if (req.body.nameLike) {
    Polls.find({}, (err, matches) => {
      matches = matches.filter(match => {
        // console.log(match);
        return match.name.indexOf(req.body.nameLike) !== -1;
      });
      if (err) res.json(err);
      else {
        res.json(matches);
      }
    });
  } else {
    error.error.body = "";
    res.json(error);
  }
};

module.exports = getPollsByName;
