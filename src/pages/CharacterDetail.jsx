import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
      {/* The name now acts as a title for the entire component */}
      <h2>{character.name}</h2>

      {/* This new wrapper will hold our two columns */}
      <div className="detail-content-wrapper">
        {/* Column 1: The Image */}
        <div className="detail-image-container">
          <img src={character.image} alt={character.name} />
        </div>

        {/* Column 2: The Information */}
        <div className="detail-info-container">
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
              <span>Gender</span>
              <span>{character.gender}</span>
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
              <span>Number of episodes</span>
              <span>{character.episode.length}</span>
            </div>
          </div>
        </div>
      </div>
      {/* The "Back to Home" link can be outside the two-column wrapper */}
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}

export default CharacterDetail;
