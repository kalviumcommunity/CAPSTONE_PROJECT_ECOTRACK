const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  targetValue: Number,
  currentValue: { type: Number, default: 0 },
  deadline: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Goal", goalSchema);
