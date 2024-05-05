// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: String,
  inventory_id: String,
  item_name: String,
  quantity: Number,
});

module.exports = mongoose.model("Order", orderSchema);
