const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  createUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    defualt: null,
  },
  currentTime: {
    type: Date,
    default: Date.now(),
  },

  Service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
