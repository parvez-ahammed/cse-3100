import { Link } from "react-router-dom";
export default function CharacterCard({ character }) {
  return (
  <Link
      to={`/character/${character.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >

    <div className="card h-100">
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
        <button>View Details</button>
      </div>
    </div>
     </Link>
  ); 
}
