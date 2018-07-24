const Poll = require("./../Schemas/PollSchema");

const getPolls = (req, res) => {
  // console.log(req.params.name)
  let search = new RegExp(req.params.name, "gi");
  Poll.find({ name: search }).exec((err, polls) => {
    if (err) res.send(err);
    else if (polls) {
      res.set("Access-Control-Allow-Origin", "*");
      res.json(polls);
    } else res.send("none found");
  });
};

module.exports = getPolls;
