const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sender_invoice_id: {
    type: String,
  },
  qpay_invoice_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ["paid", "pending", "other_status"],
    default: "pending",
  },
  createdInvoiceDateTime: { type: Date },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
