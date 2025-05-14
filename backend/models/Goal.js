const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  category: {
    type: String,
    enum: ["transport", "energy", "food", "waste", "lifestyle", "general"],
    required: true,
  },
  targetValue: { type: Number, required: true },
  currentValue: { type: Number, default: 0 },
  unit: { type: String, default: "kg CO2" }, // unit of measurement
  deadline: Date,
  completed: { type: Boolean, default: false },
  completedDate: Date,
  // Whether badges have been awarded for this goal
  badgeAwarded: { type: Boolean, default: false },
  // Historical progress tracking
  progressHistory: [
    {
      date: { type: Date, default: Date.now },
      value: Number,
    },
  ],
});

// Index for faster queries
goalSchema.index({ user: 1, completed: 1 });

module.exports = mongoose.model("Goal", goalSchema);
