const mysql2 = require('mysql2')
const pool = mysql2.createPool({
  host: 'db4free.net',
  user: 'hrishikesh',
  password: '8805799228',
  port: 3306,
  database: "emp_management",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
})

module.exports = pool
