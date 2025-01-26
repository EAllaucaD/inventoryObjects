const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const inventoryRoutes = require('./routes/inventoryRoutes');
const yaml = require('yamljs');

dotenv.config();
const app = express();

// Configure Swagger
const swaggerDocument = yaml.load('./src/docs/swagger.yaml');  // Cargar el archivo swagger.yaml
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));  // Configurar la URL de documentación Swagger

// Using CORS and JSON middleware
app.use(cors());
app.use(express.json());

// Setting up routes
app.use('/api/inventory-objects', inventoryRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3016;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
