// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // ou o host do seu banco de dados MySQL
  user: "root", // seu usuário MySQL
  password: "123123", // sua senha MySQL
  database: "crud_db", // o nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

module.exports = connection;
