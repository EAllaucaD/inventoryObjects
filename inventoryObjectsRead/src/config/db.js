const { Pool } = require('pg');
require('dotenv').config();

// Setting up the database connection.
const pool = new Pool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
  
});


async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log("Connection successful:", res.rows);
  } catch (err) {
    console.error("Connection error:", err);
  }
}

testConnection();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
