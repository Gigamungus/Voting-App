const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voterSchema = Schema({
  ip: {
    type: String,
    required: true
  },
  polls: {
    type: [Schema.Types.ObjectId],
    default: []
  }
});

module.exports = Voter = mongoose.model("Voter", voterSchema);
