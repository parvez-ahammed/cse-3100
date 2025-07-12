import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link
      to={`/character/${character.id}`}
      className="text-decoration-none text-dark"
    >
      <div className="card h-100 shadow-sm">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            {character.status} - {character.species}
          </p>
        </div>
      </div>
    </Link>
  );
}
