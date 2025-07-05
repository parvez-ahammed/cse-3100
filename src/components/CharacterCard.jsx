import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="card-link">
      <div className="character-card fancy-card">
        <img
          src={character.image}
          alt={character.name}
          className="character-img"
        />
        <div className="character-info">
          <h5>{character.name}</h5>
          <p>{character.status}</p>
        </div>
      </div>
    </Link>
  );
}
