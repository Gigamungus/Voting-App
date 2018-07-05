const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voterSchema = Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: str => {
        return str.length >= 2 && str.length <= 16;
      },
      message: "name must be between 2 and 16 characters"
    }
  },
  password: {
    type: String,
    required: true
  },
  votedPolls: {
    type: [{ type: Schema.Types.ObjectId, ref: "polls" }],
    default: []
  },
  createdPolls: {
    type: [{ type: Schema.Types.ObjectId, ref: "polls" }],
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Voter = mongoose.model("voter", voterSchema);
