import { Link } from "react-router-dom";
import "./CharacterCard.css";

export default function CharacterCard({ character }) {
  return (
    <div className="card character-card text-center">
      <img
        src={character.image}
        alt={character.name}
        className="card-img-top character-img"
      />
      <div className="card-body p-2">
        <h6 className="mb-1">{character.name}</h6>
        <p className="text-muted small mb-2">
          {character.status} - {character.species}
        </p>

        <Link
          to={`/character/${character.id}`}
          className="btn-details"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
