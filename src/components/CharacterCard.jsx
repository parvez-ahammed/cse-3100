import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#001F3F]">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg text-center font-bold text-[#001F3F] mb-3">
          {character.name}
        </h5>
        <p className="text-[#003366] mb-4">
          <span className="font-semibold">Status:</span> {character.status}
          <br />
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <Link
          to={`/character/${character.id}`}
          className="block mt-4 w-full rounded-lg bg-[#001F3F] text-white py-2 text-center font-medium hover:bg-[#003366] transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
