// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota para listar todas as entidades
app.get("/entities", (req, res) => {
  db.query("SELECT * FROM entities", (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result);
  });
});

// Rota para cadastrar uma nova entidade
app.post("/entities", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO entities (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({ message: "Entidade cadastrada com sucesso", id: result.insertId });
  });
});

// Rota para atualizar uma entidade
app.put("/entities/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query(
    "UPDATE entities SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send({ message: "Entidade atualizada com sucesso" });
    }
  );
});

// Rota para excluir uma entidade
app.delete("/entities/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM entities WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({ message: "Entidade excluída com sucesso" });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
