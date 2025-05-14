const mongoose = require("mongoose");

const carbonLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: {
    type: String,
    required: true,
    enum: ["transport", "energy", "food", "waste", "other"],
  },
  activity: { type: String, required: true },
  carbonEmitted: { type: Number, required: true }, // in kg
  date: { type: Date, default: Date.now },
  location: String,
  notes: String,
  // Track if this log contributed to any goals
  contributedGoals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }],
});

// Index for faster queries by user
carbonLogSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model("CarbonLog", carbonLogSchema);
