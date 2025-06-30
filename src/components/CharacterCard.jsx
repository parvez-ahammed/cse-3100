import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-[#1a2e1a] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#00d1d1] hover:border-[#aaff00]">
      {/* Character Image */}
      <div className="relative pb-[100%] overflow-hidden bg-gray-900">
        <img
          src={character.image}
          className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          alt={character.name}
        />
      </div>

      {/* Character Info */}
      <div className="px-4 py-3 bg-[#1a2e1a]">
        <h3 
          className="text-xl mb-1 text-[#aaff00]  subtle-glow" 
          style={{ 
            fontFamily: "'Get Schwifty', sans-serif", 
            letterSpacing: '0.5px',
            //textShadow: '0 0 8px #aaff00'
          }}
        >
          {character.name}
        </h3>
        
        {/* Status Indicator */}
        <div className="flex items-center mb-2">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            character.status === 'Alive' ? 'bg-[#00ff88]' : 
            character.status === 'Dead' ? 'bg-[#ff3366]' : 'bg-[#aaaaaa]'
          }`}></div>
          <span className="text-sm text-[#00d1d1]">
            {character.status} - {character.species}
          </span>
        </div>

        {/* Additional Info */}
        <div className="text-xs text-[#00d1d1]/90 mb-3">
          {character.type && (
            <p className="mb-1 truncate">
              <span className="font-semibold text-[#aaff00]">Type:</span> {character.type}
            </p>
          )}
          <p className="truncate">
            <span className="font-semibold text-[#aaff00]">Origin:</span> {character.origin?.name}
          </p>
        </div>

        {/* Details Button */}
        <Link 
          to={`/character/${character.id}`}
          className="inline-block w-full py-2 text-center text-sm font-medium rounded-md bg-[#00d1d1] hover:bg-[#00ffcc] text-[#1a2e1a] transition-colors duration-200 hover:shadow-[0_0_10px_#00ffcc]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}