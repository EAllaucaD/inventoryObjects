const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const { authorize } = require('../Middlewares/authMiddleware');
const router = express.Router();

// DELETE route to delete an object
router.delete('/:id', inventoryController.deleteInventoryObject, authorize);

module.exports = router;
