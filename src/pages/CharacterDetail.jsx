import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        const episodePromises = data.episode.map((url) =>
          fetch(url).then((res) => res.json())
        );
        Promise.all(episodePromises).then(setEpisodes);
      });
  }, [id]);

  if (!character) {
    return (
      <div className="text-center text-xl font-semibold mt-20 text-gray-600">
        Loading character details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-pink-100 py-16 px-4">
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/70 shadow-xl rounded-3xl p-10 md:p-16 border border-white/30">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <img
            src={character.image}
            alt={character.name}
            className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-white/50 hover:scale-105 transition-transform duration-300"
          />

          <div className="text-gray-900 flex-1 space-y-5">
            <h1 className="text-5xl font-extrabold tracking-tight text-indigo-800 drop-shadow">
              {character.name}
            </h1>

            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-700">Status:</span>
              <span
                className={`px-4 py-1 text-sm rounded-full font-bold shadow-md 
                  ${
                    character.status === "Alive"
                      ? "bg-green-500 text-white"
                      : character.status === "Dead"
                      ? "bg-red-500 text-white"
                      : "bg-gray-400 text-white"
                  }`}
              >
                {character.status}
              </span>
            </div>

            <p className="text-lg text-gray-700">
              <span className="font-semibold text-indigo-800">Species:</span> {character.species}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold text-indigo-800">Origin:</span> {character.origin.name}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold text-indigo-800">Last known location:</span>{" "}
              {character.location.name}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold text-indigo-800">Episodes:</span> {episodes.length}
            </p>

            <div>
              <h3 className="text-xl font-semibold mt-6 mb-2 text-indigo-800">Episode List</h3>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {episodes.map((ep) => (
                  <li
                    key={ep.id}
                    className="bg-white/50 hover:bg-white/70 transition-colors p-3 rounded-lg shadow text-gray-800"
                  >
                    <span className="font-bold">{ep.name}</span>{" "}
                    <span className="text-gray-600 text-xs">({ep.episode})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
