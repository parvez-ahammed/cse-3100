import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 pt-24 pb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Character Details:</h1>

      <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl max-w-3xl w-full p-8 flex flex-col md:flex-row gap-8 items-center">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-xl shadow-md w-64 h-64 object-cover"
        />
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">{character.name}</h2>

          <p>
            <span className="font-semibold text-gray-700">Status:</span>{" "}
            <span
              className={
                character.status.toLowerCase() === "alive"
                  ? "text-green-600 font-bold"
                  : character.status.toLowerCase() === "dead"
                  ? "text-red-600 font-bold"
                  : "text-gray-600 font-semibold"
              }
            >
              {character.status}
            </span>
          </p>

          <p>
            <span className="font-semibold text-gray-700">Species:</span> {character.species}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Origin:</span> {character.origin.name}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Last Known Location:</span>{" "}
            {character.location.name}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Number of Episodes:</span>{" "}
            {character.episode.length}
          </p>
        </div>
      </div>
    </div>
  );
}




