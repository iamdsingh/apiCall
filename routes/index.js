const express = require("express");
const router = express.Router();

// Import route handlers for different endpoints
const inventoryRoutes = require("./inventoryRoutes");
const customerRoutes = require("./customerRoutes");
const orderRoutes = require("./orderRoutes");

// Define route handlers for different endpoints
router.use("/inventory", inventoryRoutes);
router.use("/customer", customerRoutes);
router.use("/order", orderRoutes);

module.exports = router;
