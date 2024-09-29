import React from "react";
import { Link } from "react-router-dom";

function EntityItem({ entity, deleteEntity }) {
  return (
    <li>
      {entity.name}
      <Link to={`/update/${entity.id}`}>
        <button>Atualizar</button>
      </Link>
      <button onClick={() => deleteEntity(entity.id)}>Excluir</button>
    </li>
  );
}

export default EntityItem;
