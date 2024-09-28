import React from "react";
import { Link } from "react-router-dom";

function EntityItem({ entity, index, deleteEntity }) {
  return (
    <li>
      {entity.name}
      <Link to={`/update/${index}`}>
        <button>Atualizar</button>
      </Link>
      <button onClick={() => deleteEntity(index)}>Excluir</button>
    </li>
  );
}

export default EntityItem;
