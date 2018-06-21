const mongoose = require("mongoose");
const Voter = require("./VoterSchema");
const Schema = mongoose.Schema;

const pollSchema = Schema({
  name: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true,
    validate: [
      val => val.length > 0 && val.length <= 100,
      "requires 1-100 options"
    ]
  },
  voters: {
    type: [Schema.Types.ObjectId],
    ref: "Voter"
  }
});

module.exports = Poll = mongoose.model("Poll", pollSchema);
