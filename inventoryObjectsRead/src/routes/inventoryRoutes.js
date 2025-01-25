const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

// GET route to read inventory items
router.get('/', inventoryController.getInventoryObjects);

module.exports = router;
