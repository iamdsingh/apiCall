// models/Inventory.js
const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventory_id: String,
  inventory_type: String,
  item_name: String,
  available_quantity: Number,
});

module.exports = mongoose.model("Inventory", inventorySchema);
