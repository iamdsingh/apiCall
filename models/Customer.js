// models/Customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer_id: String,
  customer_name: String,
  email: { type: String, unique: true },
});

module.exports = mongoose.model("Customer", customerSchema);
