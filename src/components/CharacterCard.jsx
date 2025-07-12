import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text mb-2">
          <strong>Status:</strong> {character.status}
          <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link
          to={`/character/${character.id}`}
          className="btn btn-outline-success w-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
