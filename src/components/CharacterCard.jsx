import { Link } from "react-router-dom";
export default function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h5 className="text-xl font-semibold mb-2">{character.name}</h5>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link
          to={`/character/${character.id}`}
          className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
