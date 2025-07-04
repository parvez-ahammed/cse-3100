import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center
      transition-transform duration-200 hover:scale-105
      ring-2 ring-transparent hover:ring-blue-400 dark:hover:ring-blue-300
      hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_32px_8px_rgba(96,165,250,0.4)]
      dark:border-4 dark:border-blue-800">
      <img
        src={character.image}
        className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 dark:border-gray-700"
        alt={character.name}
      />
      <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{character.name}</h5>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 text-center">
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species}
      </p>
      <Link
        to={`/character/${character.id}`}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}