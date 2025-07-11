import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/CharacterDetail.css";

// Component to display detailed information about a single character
export default function CharacterDetail() {
  const { id } = useParams(); // Extract the character ID from the URL
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [character, setCharacter] = useState(null); // State to hold character data

  // Fetch character data when the component mounts or when the ID changes
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter); // Store the character data in state
  }, [id]);

  // Show a loading message while data is being fetched
  if (!character) return <div className="character-loading">Loading...</div>;

  return (
    <div className="character-page">
      <div className="character-profile">
        
        {/* Clickable and downloadable character image */}
        <a href={character.image} download target="_blank" rel="noopener noreferrer">
          <img
            src={character.image}
            alt={character.name}
            className="character-pic"
            title="Click to download"
          />
        </a>

        {/* Character information section */}
        <div className="character-detail">
          <div className="detail-item"><strong>Name:</strong> {character.name}</div>
          <div className="detail-item"><strong>Status:</strong> {character.status}</div>
          <div className="detail-item"><strong>Species:</strong> {character.species}</div>
          <div className="detail-item"><strong>Origin:</strong> {character.origin?.name}</div>
          <div className="detail-item"><strong>Last known location:</strong> {character.location?.name}</div>
          <div className="detail-item"><strong>Number of episodes:</strong> {character.episode.length}</div>
        </div>

        {/* Button to go back to the previous page */}
        <button className="back-home" onClick={() => navigate(-1)}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
