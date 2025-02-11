require('dotenv').config();
const { Pool } = require('pg');

//Env for postgres
const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD_DB,
    port: process.env.DB_PORT || 5432,
    ssl: { rejectUnauthorized: false }
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

module.exports = pool;
