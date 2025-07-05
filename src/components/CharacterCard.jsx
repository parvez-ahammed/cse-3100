import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="block">
      <div className="bg-white rounded border p-4 text-center transition-shadow duration-200 hover:shadow-md">
        <img
          src={character.image}
          alt={character.name}
          className="w-full aspect-square object-cover mb-2 rounded"
        />
        <h2 className="font-semibold text-base">{character.name}</h2>
        <p className="text-sm text-gray-600">
          {character.status} - {character.species}
        </p>
      </div>
    </Link>
  );
}
