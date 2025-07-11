import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text mb-3">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`} className="btn btn-primary mt-auto w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}
