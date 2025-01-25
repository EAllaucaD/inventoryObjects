const express = require('express');
const inventoryController = require('../controllers/inventoryController');  
const router = express.Router();

// PUT route to update inventory objects
router.put('/:id', inventoryController.updateInventoryObject);

module.exports = router;
