const db = require('../config/db');

// Lógica para eliminar un objeto de inventario por id
exports.deleteInventoryObject = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM inventoryObj WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Inventory object not found' });
    }

    res.status(200).json({ message: `Inventory object with id ${id} deleted successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting inventory object' });
  }
};
