const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

// Ruta DELETE para eliminar un objeto
router.delete('/:id', inventoryController.deleteInventoryObject);

module.exports = router;
