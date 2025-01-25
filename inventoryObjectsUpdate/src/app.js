const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inventoryRoutes = require('./routes/inventoryRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/inventory-objects', inventoryRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3017;  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
