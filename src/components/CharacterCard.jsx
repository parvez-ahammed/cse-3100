// src/components/CharacterCard.jsx

import React from "react";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  // The Link component makes the entire card clickable

  return (
    <Link to={`/character/${character.id}`} className="card-link">
      <div className="card">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Status:</strong> {character.status}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
