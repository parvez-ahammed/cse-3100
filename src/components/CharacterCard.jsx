import { Link } from "react-router-dom";
import "./CharacterCard.css"
export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <p className="card-title">{character.name}</p>
  
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`}>
         <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}
