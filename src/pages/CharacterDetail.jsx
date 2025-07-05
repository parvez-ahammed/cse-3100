import { useParams } from "react-router-dom"; // For accessing route parameters like :id
import React, { useEffect, useState } from "react";
import "/src/style.css"; // Import global styles

export default function CharacterDetail() {
  // Extract character ID from the URL
  const { id } = useParams();

  // Store character data in local state
  const [character, setCharacter] = useState(null);

  // Fetch character details from API whenever 'id' changes
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(data => setCharacter(data)); // Set the fetched character data
  }, [id]);

  // While data is loading
  if (!character) return <p>Loading...</p>;

  // Render character details after data is loaded
  return (
    <div className="character-details">
      <h2>{character.name}</h2>

      {/* Character image */}
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid"
      />

      {/* Basic info displayed in a structured way */}
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin?.name}</p>
      <p><strong>Last known location:</strong> {character.location?.name}</p>
      <p><strong>Episodes appeared in:</strong> {character.episode.length}</p>
    </div>
  );
}
