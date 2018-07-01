const Poll = require("./../Schemas/PollSchema");

const getPoll = (req, res) => {
  Poll.findOne({ _id: req.params.id })
    .then(poll => {
      res.set("Access-Control-Allow-Origin", "*");
      res.json(poll);
    })
    .catch(err => console.log(err));
};

module.exports = getPoll;
