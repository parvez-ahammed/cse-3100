import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text mb-2">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>

        {/* Link to new route */}
        <Link
          to={`/character/${character.id}`}
          className="btn btn-outline-primary btn-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
