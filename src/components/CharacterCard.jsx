import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  // Choose status color
  const statusColor =
    character.status === "Alive"
      ? "green"
      : character.status === "Dead"
      ? "red"
      : "gray";

  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong>{" "}
          <span style={{ color: statusColor }}>{character.status}</span>
          <br />
          <strong>Species:</strong> {character.species}
        </p>
        <div className="mt-auto">
          <Link to={`/character/${character.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
