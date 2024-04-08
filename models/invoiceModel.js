const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        default: false,
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Item = mongoose.model("Invoice", invoiceSchema);
module.exports = Item;
