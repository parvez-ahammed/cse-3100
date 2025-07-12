import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto rounded-md"
      />
      <div className="mt-3 space-y-1">
        <h2 className="text-lg font-semibold">{character.name}</h2>
        <p className="text-sm text-gray-600">
          <strong>Status:</strong> {character.status}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`}>
          <button className="mt-2 bg-blue-500 text-white text-sm px-4 py-1 rounded hover:bg-blue-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
