const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

// DELETE route to delete an object
router.delete('/:id', inventoryController.deleteInventoryObject);

module.exports = router;
