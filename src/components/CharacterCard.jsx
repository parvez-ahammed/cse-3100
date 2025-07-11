import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg text-center font-bold text-black mb-3">
          {character.name}
        </h5>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Status:</span> {character.status}
          <br />
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <Link
          to={`/character/${character.id}`}
          className="block mt-4 w-full rounded-lg bg-gray-900 text-white py-2 text-center font-medium hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
