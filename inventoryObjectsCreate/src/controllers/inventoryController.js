const pool = require('../config/db');

// Create an object in the database
const createInventoryObject = async (req, res) => {
    const { objecttype, quantity, status } = req.body;

    if (!objecttype || !quantity || !status) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Insert into inventoryObj table
        const query = `
            INSERT INTO inventoryObj (objecttype, quantity, status)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [objecttype, quantity, status];
        
        const result = await pool.query(query, values);

        return res.status(201).json({
            message: 'Inventory object created successfully!',
            data: result.rows[0],
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error creating object' });
    }
};

module.exports = {
    createInventoryObject,
};
