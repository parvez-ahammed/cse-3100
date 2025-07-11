import { Link } from "react-router-dom";

function getStatusBadge(status) {
  switch (status.toLowerCase()) {
    case "alive":
      return "bg-success";
    case "dead":
      return "bg-danger";
    default:
      return "bg-secondary";
  }
}

export default function CharacterCard({ character }) {
  return (
    <div className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ objectFit: "cover", height: "250px" }}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{character.name}</h5>
        <p className="card-text mb-3">
          <strong>Status:</strong>{" "}
          <span className={`badge ${getStatusBadge(character.status)}`}>
            {character.status}
          </span>
          <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link
          to={`/character/${character.id}`}
          className="btn btn-primary mt-auto w-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
