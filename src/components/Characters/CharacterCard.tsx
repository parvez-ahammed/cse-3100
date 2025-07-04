import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../types/character';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive': return 'bg-green-500';
      case 'dead': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Link
      to={`/character/${character.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
    >
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(character.status)}`}>
            <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
            {character.status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{character.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{character.species}</p>
        <p className="text-sm text-gray-500 truncate">
          Last seen: {character.location.name}
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;