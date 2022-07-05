const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    user: process.env.USER, 
    database: process.env.DATABASE,
    host: process.env.HOST, 
    port: process.env.SQL_PORT
})

module.exports = pool