const mongoose = require("mongoose");

const serviceProviderSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username."],
    },
    name: {
      type: String,
      required: [true, "Please provide a username."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      maxLength: 64,
      required: [true, "Please provide a password."],
    },
    phoneNumber: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    protectedArea: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProtectedArea",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema);
