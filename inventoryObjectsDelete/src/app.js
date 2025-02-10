const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const inventoryRoutes = require('./routes/inventoryRoutes');
const yaml = require('yamljs');

dotenv.config();
const app = express();

// Configuring CORS and using JSON
app.use(cors());
app.use(express.json());

const port = process.env.PORTD || 3015;

// Load and configure Swagger
const swaggerDocument = yaml.load('./src/docs/swagger.yaml');  // Cargar el archivo swagger.yaml
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));  // Configurar la URL de documentación Swagger

// Routes
app.use('/api/inventory-objects', inventoryRoutes);

// Error handling.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server.

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${process.env.PORTD}/api-docs`);
});

