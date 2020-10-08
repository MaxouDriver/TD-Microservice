import pg from 'pg';
import dotenv from 'dotenv';

let envValue = dotenv.config();

const pool = new pg.Pool({
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT!)
});

export default pool;