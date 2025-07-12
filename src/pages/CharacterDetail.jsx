// src/pages/CharacterDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetails({ theme }) {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found</p>;

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 20,
        backgroundColor: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#eee" : "#111",
        borderRadius: 12,
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: 20,
          padding: "8px 16px",
          borderRadius: 6,
          cursor: "pointer",
          backgroundColor: theme === "dark" ? "#333" : "#ddd",
          color: theme === "dark" ? "#fff" : "#000",
          border: "none",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>

      <h2 style={{ color: theme === "dark" ? "#00ff9f" : "#00776f" }}>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%", borderRadius: 12 }}
      />
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Origin:</strong> {character.origin?.name}
      </p>
      <p>
        <strong>Last known location:</strong> {character.location?.name}
      </p>
      <p>
        <strong>Number of episodes:</strong> {character.episode.length}
      </p>
    </div>
  );
}
