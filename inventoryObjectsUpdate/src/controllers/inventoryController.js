const db = require('../config/db');

// Lógica para actualizar un objeto de inventario por su ID
exports.updateInventoryObject = async (req, res) => {
  const { id } = req.params;
  const { objectType, quantity, status } = req.body; // Usamos estos campos según la nueva estructura de datos

  // Validación para asegurarse de que los campos necesarios están presentes
  if (!objectType || !quantity || !status) {
    return res.status(400).json({ message: 'Object type, quantity, and status are required' });
  }

  try {
    // Actualizamos en la tabla 'inventoryObj'
    const result = await db.query(
      'UPDATE inventoryObj SET objectType = $1, quantity = $2, status = $3 WHERE id = $4 RETURNING *',
      [objectType, quantity, status, id]
    );

    // We check if the object was found and updated
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Inventory object not found' });
    }

    // We return the updated object
    res.status(200).json({ message: 'Inventory object updated', updatedObject: result.rows[0] });
  } catch (err) {
    // Error handling
    console.error(err);
    res.status(500).json({ message: 'Error updating inventory object', error: err.message });
  }
};
