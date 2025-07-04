import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card h-100">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Status:</strong> {character.status} <br />
            <strong>Species:</strong> {character.species}
          </p>
        </div>
        <Link to={`/character/${character.id}`} className="btn btn-primary mt-3">
          View Details
        </Link>
      </div>
    </div>
  );
}
