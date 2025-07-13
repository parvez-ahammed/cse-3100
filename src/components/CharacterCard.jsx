import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <Link to={`/character/${character.id}`} className="block group">
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Status badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md ${statusColor[character.status] || "bg-gray-500"}`}
        >
          {character.status}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
            {character.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {character.species} &mdash; {character.gender}
          </p>
        </div>
      </div>
    </Link>
  );
}
