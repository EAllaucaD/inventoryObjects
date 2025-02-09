const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();

const app = express();
const port = process.env.PORTC || 3014;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');  // Route swagger.yaml
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api', inventoryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${process.env.PORT}/api-docs`);
});
