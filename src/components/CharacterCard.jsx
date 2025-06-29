import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card h-100 shadow-sm border border-2 rounded-3">
      <img
        src={character.image}
        className="card-img-top rounded-top-2"
        alt={character.name}
      />

      <div className="card-body d-flex flex-column p-3">
        <h5 className="card-title">{character.name}</h5>

        <p className="card-text small"> 
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        
        <Link
          to={`/character/${character.id}`}
          className="btn btn-sm btn-outline-dark mt-auto" 
        >
          View Details
        </Link>
      </div>
    </div>
  );
}