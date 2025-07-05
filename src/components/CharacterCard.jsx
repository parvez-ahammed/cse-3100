import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "#55cc44";
      case "dead":
        return "#d63d2e";
      default:
        return "#9e9e9e";
    }
  };

  return (
    <div className="character-card">
      <Link to={`/character/${character.id}`} className="character-link">
        <div className="character-image-container">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
            loading="lazy"
          />
          <div className="character-status">
            <span
              className="status-indicator"
              style={{ backgroundColor: getStatusColor(character.status) }}
            ></span>
            <span className="status-text">{character.status}</span>
          </div>
        </div>

        <div className="character-info">
          <h3 className="character-name">{character.name}</h3>
          <p className="character-species">{character.species}</p>
          <p className="character-origin">
            <span className="label">Origin:</span>
            <span className="value">{character.origin.name}</span>
          </p>
          <p className="character-location">
            <span className="label">Last seen:</span>
            <span className="value">{character.location.name}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
