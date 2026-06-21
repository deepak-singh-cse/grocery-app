const mongoose = require("mongoose");

const shopkeeperSchema =
new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  mobile: {
    type: String,
    default: "",
  },

  address: {
    type: String,
    default: "",
  },

  shopName: {
    type: String,
    default: "",
  },

  shopLogo: {
    type: String,
    default: "",
  },

  shopTiming: {
    type: String,
    default: "",
  },

  rating: {
    type: Number,
    default: 5,
  },

  password: {
    type: String,
    required: true,
  },

});

module.exports =
mongoose.model(
  "Shopkeeper",
  shopkeeperSchema
);