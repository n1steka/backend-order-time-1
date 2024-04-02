const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new mongoose.Schema({
  name: String,
});

// Define a schema for the item
const itemSchema = new mongoose.Schema({
  huwaari: {
    type: String,
  },
});

// Define the service schema
const serviceSchema = new Schema({
  name: {
    type: String,
  },
  SubCategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory", // Reference to another model named "SubCategory"
  },
  files: [fileSchema], // Array of files using the fileSchema
  item: [itemSchema], // Array of items using the itemSchema
  description: {
    type: String,
    required: [true, "Description is required"],
    maxlength: [80, "Description must be less than or equal to 80 characters"],
  },
  price: {
    type: Number,
  },
  currentTime: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
