const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
  name: String,
  description: String,
  iconUrl: String,
  awardedFor: String // e.g., "first log", "goal complete"
});

module.exports = mongoose.model("Badge", badgeSchema);
