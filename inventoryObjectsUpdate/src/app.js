const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const inventoryRoutes = require('./routes/inventoryRoutes');
const client = require('prom-client');

dotenv.config();
const app = express();

const port = process.env.PORTU || 3017;

const collectDefaultMetrics = client.collectDefaultMetrics;

// Configuring Prometheus metrics.
collectDefaultMetrics();

// Request counter
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests received",
  labelNames: ["method", "route", "status_code"],
});

// Histogram for response times
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Histogram for the duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.5, 1, 2, 5],
});

//MMiddleware to measure metrics on each request
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = (Date.now() - start) / 1000;

    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status_code: res.statusCode,
    });

    httpRequestDuration.observe(
      { method: req.method, route: req.path, status_code: res.statusCode },
      duration
    );
  });

  next();
});

// Metrics endpoint.
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Swagger Configuration.
const swaggerDocument = yaml.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware.
app.use(cors());
app.use(express.json());

// API Routes.
app.use('/api/inventory-objects', inventoryRoutes);

// Error handling.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Initialize Server.

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

