import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusColor = {
    Alive: "success",
    Dead: "danger",
    unknown: "secondary"
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <span className={`badge bg-${statusColor[character.status]}`}>
              {character.status}
            </span> - {character.species}
          </p>
          <Link
            to={`/character/${character.id}`}
            className="btn btn-primary w-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}