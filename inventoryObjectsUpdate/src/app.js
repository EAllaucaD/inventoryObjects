const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();
const app = express();

// Swagger Configuration
const swaggerDocument = yaml.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/inventory-objects', inventoryRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Initialize Server
const PORT = process.env.PORT || 3017;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
