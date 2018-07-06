const mongoose = require("mongoose");
const Voter = require("./VoterSchema");
const Schema = mongoose.Schema;

const pollSchema = Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: str => str.length > 0,
      message: "must contain title"
    }
  },
  options: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        voters: {
          type: [Schema.Types.ObjectId],
          ref: "voters",
          default: []
        },
        count: {
          type: Number,
          default: 0
        }
      }
    ],
    required: true,
    validate: {
      validator: arr => arr.length > 1 && arr.length <= 100,
      message: "must contain between 2 and 100 options"
    }
  },
  voters: {
    type: [Schema.Types.ObjectId],
    ref: "voters",
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "voters",
    default: undefined
  }
});

module.exports = Poll = mongoose.model("polls", pollSchema);
