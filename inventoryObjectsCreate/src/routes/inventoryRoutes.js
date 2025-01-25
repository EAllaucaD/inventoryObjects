const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Path to create an inventory item
router.post('/inventory-objects', inventoryController.createInventoryObject);

module.exports = router;
