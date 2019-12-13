const mysql = require('my-sql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'root',
  database: 'agenda-pet'
})

module.exports = conexao