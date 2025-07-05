import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacterData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found.</p>;

  return (
    <div className="detail-page-container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />

      <div className="detail-grid">
        <div className="detail-item">
          <span>Status</span>
          <span>{character.status}</span>
        </div>
        <div className="detail-item">
          <span>Species</span>
          <span>{character.species}</span>
        </div>
        <div className="detail-item">
          <span>Origin</span>
          <span>{character.origin.name}</span>
        </div>
        <div className="detail-item">
          <span>Last Known Location</span>
          <span>{character.location.name}</span>
        </div>
        <div className="detail-item">
          <span>Gender</span>
          <span>{character.gender}</span>
        </div>
        <div className="detail-item">
          <span>Number of episodes</span>
          <span>{character.episode.length}</span>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
