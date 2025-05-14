const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    googleId: String,
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual fields for relationship references
userSchema.virtual("carbonLogs", {
  ref: "CarbonLog",
  localField: "_id",
  foreignField: "user",
});

userSchema.virtual("goals", {
  ref: "Goal",
  localField: "_id",
  foreignField: "user",
});

userSchema.virtual("articles", {
  ref: "Article",
  localField: "_id",
  foreignField: "author",
});

module.exports = mongoose.model("User", userSchema);
