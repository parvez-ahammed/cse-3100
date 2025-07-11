import { Link } from "react-router-dom";
export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body mt-2">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <div className={`flex justify-between mt-4`}>
        <Link to={`/character/${character.id}`}>
              <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded-lg shadow-md">View Details</button>
        </Link>
        <Link to={`/character/${character.id}/episodes`}>
              <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded-lg shadow-md">Episode List</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
