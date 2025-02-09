const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const { authorize } = require('../Middlewares/authMiddleware');

// Path to create an inventory item
router.post('/inventory-objects', inventoryController.createInventoryObject, authorize);

module.exports = router;
