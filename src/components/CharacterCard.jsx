import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <Link to={`/character/${character.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={character.image} alt={character.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <button>View Details</button>
        </div>
      </Link>
    </div>
  );
}
