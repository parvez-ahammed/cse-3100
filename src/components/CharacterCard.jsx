import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
      <p>{character.status} - {character.species}</p>
      <Link to={`/character/${character.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
