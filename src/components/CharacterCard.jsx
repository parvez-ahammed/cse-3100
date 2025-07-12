import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>

        {/* Replace <button> with <Link> */}
        <Link to={`/character/${character.id}`} className="btn-details">
          View Details
        </Link>
      </div>
    </div>
  );
}


