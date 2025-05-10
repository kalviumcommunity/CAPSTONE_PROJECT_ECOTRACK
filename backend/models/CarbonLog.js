const mongoose = require("mongoose");

const carbonLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String, // e.g., "transport", "energy"
  activity: String,
  carbonEmitted: Number, // in kg
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CarbonLog", carbonLogSchema);
