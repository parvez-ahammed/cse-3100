import { Link } from "react-router-dom";
import "../styles/CharacterCard.css";

export default function CharacterCard({ character, clickable }) {
  const content = (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h2>{character.name}</h2>
        {/* <p>{character.status} - {character.species}</p> */}
      </div>
    </div>
  );

  return clickable ? (
    <Link to={`/character/${character.id}`} className="card-link">
      {content}
    </Link>
  ) : (
    content
  );
}
