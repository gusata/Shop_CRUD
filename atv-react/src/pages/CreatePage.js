import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage({ addEntity }) {
  const [entityName, setEntityName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entityName) {
      addEntity(entityName);
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo item</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CreatePage;
