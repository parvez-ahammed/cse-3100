import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Character not found");
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load character details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center p-6 text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-red-500 p-6 text-lg">{error}</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-10">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-10 transition-all duration-300">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition"
        >
          <span className="text-lg">←</span> Back
        </button>

        {/* Character Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          {character.name}
        </h1>

        {/* Character Image */}
        <div className="flex justify-center mb-10">
          <img
            src={character.image}
            alt={character.name}
            className="rounded-xl w-64 h-64 sm:w-72 sm:h-72 object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Character Details */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-gray-700 text-base">
          <div className="flex sm:justify-end font-semibold pr-2">Status:</div>
          <div>{character.status}</div>

          <div className="flex sm:justify-end font-semibold pr-2">Species:</div>
          <div>{character.species}</div>

          <div className="flex sm:justify-end font-semibold pr-2">Gender:</div>
          <div>{character.gender}</div>

          <div className="flex sm:justify-end font-semibold pr-2">Origin:</div>
          <div>{character.origin?.name}</div>

          <div className="flex sm:justify-end font-semibold pr-2">Location:</div>
          <div>{character.location?.name}</div>

          <div className="flex sm:justify-end font-semibold pr-2">Number of episodes:</div>
          <div>{character.episode?.length}</div>
        </div>
      </div>
    </div>
  );
}
