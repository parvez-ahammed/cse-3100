import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card h-100">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <span className={`badge ${character.status === 'Alive' ? 'bg-success' : character.status === 'Dead' ? 'bg-danger' : 'bg-secondary'} me-1`}>
            {character.status}
          </span>
          <span className="badge bg-info">{character.species}</span>
        </p>
        <Link 
          to={`/character/${character.id}`} 
          className="btn btn-primary w-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}