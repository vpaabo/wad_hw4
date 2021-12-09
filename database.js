const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "wad21",
    database: "posts",
    host: "localhost",
    port: "5432"
});
module.exports = pool;