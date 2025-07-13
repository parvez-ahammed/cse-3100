import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusColor = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500'
  };
  return (
    <Link to={`/character/${character.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{character.name}</h2>
          <div className="flex items-center mb-2">
            <span className={`w-2 h-2 rounded-full ${statusColor[character.status]} mr-2`}></span>
            <span>{character.status} - {character.species}</span>
          </div>
          <p className="text-gray-600">
            <span className="font-semibold">Last known location:</span>
            <br />
            {character.location.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
