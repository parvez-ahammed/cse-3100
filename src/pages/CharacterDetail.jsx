import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(false);

  useEffect(() => {
    // Fetch character data
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        // Fetch episodes after character data is loaded
        if (data.episode && data.episode.length > 0) {
          setLoadingEpisodes(true);
          // Extract episode IDs from URLs
          const episodeIds = data.episode.map(ep => 
            ep.split('/').pop()
          ).join(',');
          
          fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
            .then(res => res.json())
            .then(episodesData => {
              // Handle single episode (returns object) vs multiple (returns array)
              setEpisodes(Array.isArray(episodesData) ? episodesData : [episodesData]);
              setLoadingEpisodes(false);
            });
        }
      });
  }, [id]);

  if (!character) return <p className="text-center mt-10 text-[#00d1d1]">Loading character...</p>;

  return (
    <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg bg-[#1a2e1a] border-2 border-[#00d1d1] hover:border-[#aaff00] transition-all duration-300 mt-8">
      {/* Character Image */}
      <div className="relative pb-[100%] overflow-hidden bg-gray-900">
        <img
          src={character.image}
          className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          alt={character.name}
        />
      </div>

      {/* Character Info */}
      <div className="px-4 py-4 bg-[#1a2e1a]">
        <h2
          className="text-xl mb-2 text-[#aaff00] glow-text text-center"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            letterSpacing: "0.5px",
            textShadow: "0 0 8px #aaff00",
          }}
        >
          {character.name}
        </h2>

        {/* Status Indicator */}
        <div className="flex items-center justify-center mb-3">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              character.status === "Alive"
                ? "bg-[#00ff88]"
                : character.status === "Dead"
                ? "bg-[#ff3366]"
                : "bg-[#aaaaaa]"
            }`}
          ></div>
          <span className="text-sm text-[#00d1d1]">
            {character.status} - {character.species}
          </span>
        </div>

        <div className="text-xs text-[#00d1d1]/90 space-y-2 mb-4">
          <p>
            <span className="font-semibold text-[#aaff00]">Origin:</span> {character.origin.name}
          </p>
          <p>
            <span className="font-semibold text-[#aaff00]">Last Location:</span> {character.location.name}
          </p>
          <p>
            <span className="font-semibold text-[#aaff00]">Episodes:</span> {character.episode.length}
          </p>
        </div>

        {/* Episode List */}
        <div className="border-t border-[#00d1d1]/30 pt-3">
          <h3 className="text-sm font-semibold text-[#aaff00] mb-2">
            Episode Appearances:
          </h3>
          {loadingEpisodes ? (
            <p className="text-xs text-[#00d1d1]">Loading episodes...</p>
          ) : episodes.length > 0 ? (
            <ul className="text-xs text-[#00d1d1]/90 space-y-1 max-h-40 overflow-y-auto pr-2">
              {episodes.map((episode) => (
                <li key={episode.id} className="hover:text-[#aaff00] transition-colors duration-200">
                  {episode.episode}: {episode.name} ({episode.air_date})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-[#00d1d1]">No episode data available</p>
          )}
        </div>
      </div>
    </div>
  );
}