import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${getStatusColor(
              character.status
            )}`}
          ></div>
          <span className="text-xs bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            {character.status}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 truncate">
          {character.name}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <p className="text-sm text-gray-600 truncate">
          <span className="font-semibold">Origin:</span> {character.origin.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
