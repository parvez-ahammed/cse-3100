import React from 'react';
import { Link } from 'react-router-dom';

// Futuristic character card with neon gradients, glassmorphism, and smooth animations
const CharacterCard = ({ character }) => {
  if (!character) return <p className="text-hot-pink font-medium text-lg" role="alert">Character data unavailable</p>;

  return (
    <Link
      to={`/character/${character.id}`}
      className="relative bg-holo-glass backdrop-blur-lg border border-neon-green/40 rounded-xl p-5 shadow-[0_0_15px_rgba(0,255,159,0.3)] hover:shadow-[0_0_25px_rgba(0,255,159,0.5)] transform hover:scale-105 transition-all duration-500 animate-fade-in"
      aria-label={`View details for ${character.name}`}
      role="article"
    >
      <img
        src={character.image || 'https://via.placeholder.com/150?text=No+Image'}
        alt={character.name || 'Unknown Character'}
        loading="lazy"
        className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-electric-blue/50 shadow-[0_0_10px_rgba(0,191,255,0.3)]"
      />
      <h3 className="text-xl font-extrabold uppercase text-neon-green truncate">{character.name}</h3>
      <p className="text-md text-white/90 mb-1">
        Status: <span className={`inline-block w-4 h-4 rounded-full mr-2 ${
          character.status === 'Alive' ? 'bg-neon-green' :
          character.status === 'Dead' ? 'bg-hot-pink' : 'bg-electric-blue'
        }`}></span>
        <span className="font-semibold">{character.status}</span>
      </p>
      <p className="text-md text-white/90">
        Species: <span className="font-semibold text-electric-blue">{character.species}</span>
      </p>
      <p className="text-md text-white/90">
        Episodes: <span className="font-semibold text-electric-blue">{character.episode?.length || 0}</span>
      </p>
      <div className="absolute inset-0 bg-gradient-to-t from-neon-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    </Link>
  );
};

export default CharacterCard;