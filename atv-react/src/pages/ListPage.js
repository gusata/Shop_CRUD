import React from "react";
import { Link } from "react-router-dom";
import EntityItem from "../components/EntityItem";

function ListPage({ entities, deleteEntity }) {
  return (
    <div>
      <h2>Lista de Compras</h2>
      {entities.length === 0 ? (
        <p>Nenhum item cadastrado.</p>
      ) : (
        <ul>
          {entities.map((entity, index) => (
            <EntityItem key={index} index={index} entity={entity} deleteEntity={deleteEntity} />
          ))}
        </ul>
      )}
      <Link to="/create">
        <button>Cadastrar Novo Item</button>
      </Link>
    </div>
  );
}

export default ListPage;
