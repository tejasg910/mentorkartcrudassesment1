const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  address: { type: String },
  mobile: { type: Number },
  password: { type: String },
  email: { type: String, required: true },
});

mongoose.models = {};
module.exports = mongoose.model("User", userSchema);
