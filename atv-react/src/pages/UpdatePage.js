import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePage({ entities, updateEntity }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const [newName, setNewName] = useState(entities[index].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName) {
      updateEntity(index, newName);
      navigate("/"); 
    }
  };

  return (
    <div>
      <h2>Atualizar produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Novo Nome do produto:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdatePage;
