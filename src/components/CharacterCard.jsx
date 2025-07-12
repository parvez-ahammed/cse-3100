import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="block">
      <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-xs transition-transform hover:scale-105">
        <img
          src={character.image}
          className="w-full h-60 object-cover"
          alt={character.name}
        />
        <div className="p-4">
          <h5 className="text-xl font-bold text-gray-800 mb-2">
            {character.name}
          </h5>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            <span className="font-semibold">Status:</span> {character.status}{" "}
            <br />
            <span className="font-semibold">Species:</span> {character.species}
          </p>
          <button className="bg-purple-600 p-5 text-white font-semibold px- py-2 rounded-lg hover:bg-purple-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
