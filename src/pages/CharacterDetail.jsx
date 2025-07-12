import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CharacterDetail.css';

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) throw new Error("Failed to fetch character");
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (error) return <div className="error-message">{error}</div>;
  if (!character) return <div className="loading-spinner"></div>;

  return (
    <div className="character-detail-page">
      <button className="back-button" onClick={handleBack}>← Back to Home</button>

      <div className="character-header">
        <h1>{character.name}</h1>
      </div>
      <div className="character-image-container">
        <img src={character.image} alt={character.name} className="character-image" />
      </div>
      <div className="character-details">
        <div><strong>Status:</strong> {character.status}</div>
        <div><strong>Species:</strong> {character.species}</div>
        <div><strong>Gender:</strong> {character.gender}</div>
        <div><strong>Origin:</strong> {character.origin.name}</div>
        <div><strong>Last known location:</strong> {character.location.name}</div>
        <div><strong>Number of episodes:</strong> {character.episode.length}</div>
      </div>
    </div>
  );
}
