const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  contact_info: String,
  status: {
    type: String,
    default: "active"
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);