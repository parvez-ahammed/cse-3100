import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  //Fetch API
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading)
    return (
      <p className="text-cyan-400 text-xl mt-24 font-orbitron text-center">
        Loading character...
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-orbitron p-10 flex flex-col items-center">
      <Link
        to="/"
        className="self-start bg-cyan-400/20 text-cyan-400 px-6 py-2 rounded-full font-bold mb-8 shadow-cyan-400/80 hover:bg-cyan-400/30 transition duration-300"
      >
        ⬅ Back
      </Link>

      <div className="backdrop-blur-lg  border border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,255,204,0.1)] flex flex-wrap gap-5 max-w-[1000px] w-full p-8">
        <img
          src={character.image}
          alt={character.name}
          className="w-full max-w-[320px] rounded-lg object-cover"
        />

        <div className="flex-1 min-w-[260px] flex flex-col justify-center">
          <h1 className="text-[2.8rem] text-cyan-400 mb-5 drop-shadow-[0_0_10px_#00ffd5]">
            {character.name}
          </h1>

          <p className="text-lg mb-3 text-gray-300">
            <strong>Status:</strong>{" "}
            <span style={{ color: getStatusColor(character.status) }}>
              {character.status}
            </span>
          </p>

          <p className="text-lg mb-3 text-gray-300">
            <strong>Species:</strong> {character.species}
          </p>
          <p className="text-lg mb-3 text-gray-300">
            <strong>Gender:</strong> {character.gender}
          </p>
          <p className="text-lg mb-3 text-gray-300">
            <strong>Origin:</strong> {character.origin?.name}
          </p>
          <p className="text-lg mb-3 text-gray-300">
            <strong>Location:</strong> {character.location?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline color mapping for status
const getStatusColor = (status) => {
  if (status === "Alive") return "#00ff95"; // neon green
  if (status === "Dead") return "#ff4e4e"; // red
  return "#aaaaaa"; // gray for unknown
};

export default CharacterDetail;
