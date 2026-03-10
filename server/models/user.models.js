const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  college: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 20,
    required: true,
  },
  resetOTP: { type: Number },       // for OTP
  otpExpiry: { type: Date },        // for expiry
});

module.exports = model("User", userSchema, "users");
