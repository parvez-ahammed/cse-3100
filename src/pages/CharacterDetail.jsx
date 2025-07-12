import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./../components/footer/Footer";
import Header from "./../components/Header/header";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isDark, setIsDark] = useState(true); // Add this state

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-400 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="min-h-screen bg-black py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Character Card */}
          <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-6">
            {/* Character Image & Name */}
            <div className="text-center mb-6">
              <img
                src={character.image}
                alt={character.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-green-400"
              />
              <h2 className="text-3xl font-bold text-white mb-2">
                {character.name}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  character.status === "Alive"
                    ? "bg-green-400/20 text-green-400"
                    : character.status === "Dead"
                    ? "bg-red-400/20 text-red-400"
                    : "bg-yellow-400/20 text-yellow-400"
                }`}
              >
                {character.status}
              </span>
            </div>

            {/* Character Info */}
            <div className="space-y-4">
              <div className="bg-black border border-green-400/50 rounded-lg p-4 flex justify-between">
                <span className="text-green-400 font-semibold">Species:</span>
                <span className="text-white">{character.species}</span>
              </div>

              <div className="bg-black border border-green-400/50 rounded-lg p-4 flex justify-between">
                <span className="text-green-400 font-semibold">Gender:</span>
                <span className="text-white">{character.gender}</span>
              </div>

              <div className="bg-black border border-green-400/50 rounded-lg p-4 flex justify-between">
                <span className="text-green-400 font-semibold">Origin:</span>
                <span className="text-white">{character.origin.name}</span>
              </div>

              <div className="bg-black border border-green-400/50 rounded-lg p-4 flex justify-between">
                <span className="text-green-400 font-semibold">Location:</span>
                <span className="text-white">{character.location.name}</span>
              </div>

              <div className="bg-black border border-green-400/50 rounded-lg p-4 flex justify-between">
                <span className="text-green-400 font-semibold">Episodes:</span>
                <span className="text-white">{character.episode.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
