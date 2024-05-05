// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Inventory = require("./models/Inventory");
const Customer = require("./models/Customer");
const Order = require("./models/Order");

const app = express();
const PORT = process.env.PORT || 3005;

// Database connection
mongoose
  .connect("mongodb://localhost:27017/api_web_tech_assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Middleware
app.use(bodyParser.json());

// Routes
// Create Inventory table
app.post("/createInventory", async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.send("Inventory created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create Customer table
app.post("/createCustomer", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.send("Customer created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create Order table
app.post("/createOrder", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.send("Order created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all Orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all Inventory
app.get("/inventory", async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all Customers
app.get("/customerDetails", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get inventory by type
app.get("/inventory/:inventoryType", async (req, res) => {
  const inventoryType = req.params.inventoryType;
  try {
    const inventory = await Inventory.find({ inventory_type: inventoryType });
    res.json(inventory);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get available quantity for an item
app.get("/:itemName/availableQuantity", async (req, res) => {
  const itemName = req.params.itemName;
  try {
    const item = await Inventory.findOne({ item_name: itemName });
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.json({ available_quantity: item.available_quantity });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
