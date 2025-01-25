const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3014;

// Middleware
app.use(cors());
app.use(express.json()); // Allows handling of JSON in requests

// Routes
app.use('/api', inventoryRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
