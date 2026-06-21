const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Customer",
  customerSchema
);