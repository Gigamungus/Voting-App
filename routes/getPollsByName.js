const Polls = require("./../Schemas/PollSchema");

const getPollsByName = (req, res) => {
  // console.log(req.body);
  let error = { error: {} };
  if (req.body.nameLike) {
    const match = new RegExp(req.body.nameLike);
    Polls.find({ name: match }, (err, matches) => {
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
