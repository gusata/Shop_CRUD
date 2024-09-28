import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const [entities, setEntities] = useState(
    JSON.parse(localStorage.getItem("entities")) || []
  );

  const addEntity = (name) => {
    const newEntities = [...entities, { name }];
    setEntities(newEntities);
    localStorage.setItem("entities", JSON.stringify(newEntities));
  };

  const deleteEntity = (index) => {
    const newEntities = entities.filter((_, i) => i !== index);
    setEntities(newEntities);
    localStorage.setItem("entities", JSON.stringify(newEntities));
  };

  const updateEntity = (index, newName) => {
    const newEntities = entities.map((entity, i) =>
      i === index ? { ...entity, name: newName } : entity
    );
    setEntities(newEntities);
    localStorage.setItem("entities", JSON.stringify(newEntities));
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Listar Produtos</Link></li>
          <li><Link to="/create">Cadastrar Novo Produto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ListPage entities={entities} deleteEntity={deleteEntity} />} />
        <Route path="/create" element={<CreatePage addEntity={addEntity} />} />
        <Route
          path="/update/:index"
          element={<UpdatePage entities={entities} updateEntity={updateEntity} />}
        />
      </Routes>
    </div>
  );
}

export default App;
