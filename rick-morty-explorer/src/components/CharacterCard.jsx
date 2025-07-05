import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
       <Link to={`/character/${character.id}`}>
      <div className="card">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.status} - {character.species}</p>
      </div>
    </Link>
  );
}
