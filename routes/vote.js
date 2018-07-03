const Poll = require("./../Schemas/PollSchema");

const vote = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  Poll.findOne({ "options._id": req.params.optionId }, (err, data) => {
    // console.log(data);
    data.options = data.options.map(option => {
      return option._id == req.params.optionId
        ? Object.assign(option, { count: option.count + 1 })
        : option;
    });
    Poll.findOneAndUpdate({ "options._id": req.params.optionId }, data, {
      new: true
    }).then(response => {
      //   console.log(response);
      res.json(response);
    });
  });
};
module.exports = vote;
