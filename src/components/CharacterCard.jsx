import { useState } from "react";
import "./CharacterCard.css"; // Make sure to import the custom CSS

export default function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="character-card h-100">
      <img
        src={character.image}
        className="character-img"
        alt={character.name}
      />
      <div className="character-body">
        <h5 className="character-title">{character.name}</h5>

        <p className="character-info mb-2">
          <strong>Status:</strong>{" "}
          <span
            className={`status ${
              character.status === "Alive"
                ? "text-alive"
                : character.status === "Dead"
                ? "text-dead"
                : "text-unknown"
            }`}
          >
            {character.status}
          </span>
          <br />
          <strong>Species:</strong> {character.species}
        </p>

        <button
          className="neon-btn mt-auto"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {showDetails && (
          <div className="character-details">
            <p>{character.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
