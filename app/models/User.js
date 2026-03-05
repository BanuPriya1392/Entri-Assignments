const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "agent"
  }
});

module.exports = mongoose.model("User", UserSchema);