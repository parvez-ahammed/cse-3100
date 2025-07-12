import { useNavigate } from "react-router-dom";
import './CharacterCard.css';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <div className="character-content">
        <h5 className="character-name">{character.name}</h5>
        <p className="character-info">
          <strong>Status:</strong> {character.status}<br />
          <strong>Species:</strong> {character.species}
        </p>
        <div className="button-container">
          <button
            className="view-details-button"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
