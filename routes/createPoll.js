const Poll = require("./../Schemas/PollSchema");

const createPoll = (req, res) => {
  let options =
    typeof req.body.votingOption === "object" ? req.body.votingOption.filter(option => option) : [];

  let newPoll = new Poll({
    name: req.body.pollName,
    options
  });
  newPoll
    .save()
    .then(poll => {

      res.redirect(`/polls/${poll._id}`);
    })
    .catch(err => res.json(err));
};

module.exports = createPoll;
