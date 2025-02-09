const express = require('express');
const inventoryController = require('../controllers/inventoryController');  
const { authorize } = require('../Middlewares/authMiddleware');
const router = express.Router();

// PUT route to update inventory objects
router.put('/:id', inventoryController.updateInventoryObject, authorize);

module.exports = router;
