
import {Link} from "react-router-dom";

export default function CharacterCard({character}) {
  return (
    <div className="card h-100">
    
      <Link to={`/character/${character.id}`}>
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
          style={{cursor: "pointer"}}
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>

      
        <Link to={`/character/${character.id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
}
