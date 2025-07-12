import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up">
      {/* Status indicator ribbon */}
      <div
        className={`absolute top-0 right-0 ${
          statusColor[character.status]
        } text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10`}
      >
        {character.status}
      </div>

      {/* Make the entire card clickable */}
      <Link to={`/character/${character.id}`} className="block">
        {/* Character image with hover effect */}
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Character details */}
      <div className="p-4 space-y-2">
        <Link to={`/character/${character.id}`} className="block">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white truncate hover:text-blue-600 dark:hover:text-blue-400 transition">
            {character.name}
          </h2>
        </Link>

        <div className="flex items-center space-x-2">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              statusColor[character.status]
            }`}
          ></span>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {character.species} • {character.gender}
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          <span className="font-medium">Last location:</span>{" "}
          {character.location.name}
        </p>

        <div className="pt-3">
          <Link
            to={`/character/${character.id}`}
            className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105 shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
