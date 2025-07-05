import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterChatBot from "../components/CharacterChatBot";
import EpisodeList from "../features/EpisodeList";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) throw new Error("Character not found");
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading character details...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <p className="text-xl text-red-600 dark:text-red-400 font-semibold">{error}</p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  if (!character) return null;

  return (
    <div className="max-w-3xl mx-auto my-16 p-10 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl flex flex-col items-center relative overflow-hidden">
      <div className="absolute -top-12 -right-12 opacity-10 pointer-events-none select-none text-[12rem] font-extrabold text-blue-400 dark:text-blue-700">
        #{character.id}
      </div>
      <div className="flex flex-col items-center mb-8">
        <img
          src={character.image}
          alt={character.name}
          className="w-56 h-56 rounded-full border-8 border-blue-400 dark:border-blue-600 shadow-2xl bg-white object-cover mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-2 drop-shadow-lg">
          {character.name}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <span className={`px-6 py-2 rounded-full text-xl font-semibold shadow
            ${character.status === "Alive"
              ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
              : character.status === "Dead"
              ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}>
            {character.status}
          </span>
          <span className="px-6 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 text-xl font-semibold shadow">
            {character.species}
          </span>
          {character.type && (
            <span className="px-6 py-2 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200 text-xl font-semibold shadow">
              {character.type}
            </span>
          )}
        </div>
      </div>
      <div className="w-full bg-blue-50 dark:bg-blue-950 rounded-xl p-6 shadow-inner mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-200">Gender:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">{character.gender}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-200">Origin:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">{character.origin?.name}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-200">Location:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">{character.location?.name}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-200">Episodes:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">{character.episode?.length}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xl italic text-blue-500 dark:text-blue-300">
        "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV."
      </div>
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
      {character && <CharacterChatBot character={character} />}
      <div className="mt-8 w-full">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Episodes Featuring {character.name}</h3>
        <EpisodeList episodeIds={character.episode?.map(ep => ep.split('/').pop())} />
      </div>
    </div>
  );
}