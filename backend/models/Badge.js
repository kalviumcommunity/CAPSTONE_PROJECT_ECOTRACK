const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    iconUrl: String,
    awardedFor: String, // e.g., "first log", "goal complete"
    requirements: {
      type: { type: String, enum: ["goal", "carbonReduction", "activity"] },
      value: Number, // threshold value to earn the badge
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for users who earned this badge
badgeSchema.virtual("awardedTo", {
  ref: "User",
  localField: "_id",
  foreignField: "badges",
});

module.exports = mongoose.model("Badge", badgeSchema);
