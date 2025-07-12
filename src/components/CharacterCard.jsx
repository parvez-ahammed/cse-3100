import { Link } from "react-router-dom";
import "../styles/CharacterCard.css";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-img"
      />
      <div className="character-body">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-info">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}
