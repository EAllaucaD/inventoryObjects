const db = require('../config/db');

// Logic to get all inventory items
exports.getInventoryObjects = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM inventoryObj');

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No inventory objects found' });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving inventory objects' });
  }
};
