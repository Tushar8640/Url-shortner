const mongoose = require("mongoose");

// Define the User schema
const urlSchema = new mongoose.Schema(
  {
    shortenUrl: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    // createdBy: {
    //   type: String,
    // },
    clickCount: {
      type: Number,
      default: 0,
    },
    // isCustom: {
    //   type: Boolean,
    //   default: false,
    // },
    // customAlias: {
    //   type: String,
    // },
    // expirationDate: {
    //   type: Date,
    // },
  },

  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
