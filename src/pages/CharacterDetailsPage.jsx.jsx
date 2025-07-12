import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetailsPage.css'; // 👈 Import CSS

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) return <p className="loading">Loading...</p>;

  return (
    <div className="character-details-page">
      <h1 className="details-heading">{character.name}</h1>
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Origin:</strong> {character.origin?.name}</p>
        <p><strong>Last Location:</strong> {character.location?.name}</p>
        <p><strong>Episode Count:</strong> {character.episode.length}</p>
      </div>
    </div>
  );
}
