require('dotenv').config();
const { Pool } = require('pg');

//Env for postgres
const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD_DB,
});

module.exports = pool;
