
const mongoose = require("mongoose");

const executeSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    output: { type: String, default: "" },
    error: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExecuteLog", executeSchema);
