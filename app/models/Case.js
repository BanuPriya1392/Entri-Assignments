const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  priority: String,
  status: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Case", CaseSchema);