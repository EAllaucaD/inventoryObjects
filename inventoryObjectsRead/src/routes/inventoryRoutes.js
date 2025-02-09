const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const { authorize } = require('../Middlewares/authMiddleware');
const router = express.Router();

// GET route to read inventory items
router.get('/', inventoryController.getInventoryObjects, authorize);

module.exports = router;
