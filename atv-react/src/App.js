import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const [entities, setEntities] = useState([]);

  // Carregar as entidades da API
  useEffect(() => {
    axios
      .get("http://localhost:5000/entities")
      .then((response) => {
        setEntities(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar as entidades:", error);
      });
  }, []);

  const addEntity = (name) => {
    axios
      .post("http://localhost:5000/entities", { name })
      .then((response) => {
        setEntities([...entities, { id: response.data.id, name }]);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar entidade:", error);
      });
  };

  const deleteEntity = (id) => {
    axios
      .delete(`http://localhost:5000/entities/${id}`)
      .then(() => {
        setEntities(entities.filter((entity) => entity.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao excluir entidade:", error);
      });
  };

  const updateEntity = (id, newName) => {
    axios
      .put(`http://localhost:5000/entities/${id}`, { name: newName })
      .then(() => {
        setEntities(
          entities.map((entity) =>
            entity.id === id ? { ...entity, name: newName } : entity
          )
        );
      })
      .catch((error) => {
        console.error("Erro ao atualizar entidade:", error);
      });
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Listar Entidades</Link></li>
          <li><Link to="/create">Cadastrar Nova Entidade</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ListPage entities={entities} deleteEntity={deleteEntity} />} />
        <Route path="/create" element={<CreatePage addEntity={addEntity} />} />
        <Route
          path="/update/:id"
          element={<UpdatePage entities={entities} updateEntity={updateEntity} />}
        />
      </Routes>
    </div>
  );
}

export default App;
