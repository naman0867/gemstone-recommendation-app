const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    birthDate: {
      type: Date,
      required: true,
    },

    zodiac: {
      type: String,
      required: true,
    },

    purpose: {
      type: String,
      required: true,
    },

    gemstone: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Recommendation",
  recommendationSchema
);