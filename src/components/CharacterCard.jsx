import { Link } from "react-router-dom";
export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
      />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
      <Link to={`/character/${character.id}`} className="view-detail-btn btn-clickable">
        View Detail
      </Link>
    </div>
  );
}
