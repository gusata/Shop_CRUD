import React from "react";
import { Link } from "react-router-dom";
import EntityItem from "../components/EntityItem";

function ListPage({ entities, deleteEntity }) {
  return (
    <div>
      <h2>Listar Entidades</h2>
      {entities.length === 0 ? (
        <p>Nenhuma entidade cadastrada.</p>
      ) : (
        <ul>
          {entities.map((entity) => (
            <EntityItem key={entity.id} entity={entity} deleteEntity={deleteEntity} />
          ))}
        </ul>
      )}
      <Link to="/create">
        <button>Cadastrar Nova Entidade</button>
      </Link>
    </div>
  );
}

export default ListPage;
