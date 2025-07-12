import { useState } from "react";

export default function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>

        <button
          className="btn btn-primary"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {showDetails && (
          <div className="mt-3">
            <p>{character.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
