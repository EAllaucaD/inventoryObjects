const { Pool } = require('pg');
require('dotenv').config();

// Setting up the database connection
const pool = new Pool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
  port: process.env.DB_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
