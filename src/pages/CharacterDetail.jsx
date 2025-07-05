import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api, extractEpisodeIds } from "../common/api";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [episodesLoading, setEpisodesLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        setLoading(true);
        setError(null);

        const characterData = await api.getCharacter(id);
        setCharacter(characterData);

        if (characterData.episode && characterData.episode.length > 0) {
          setEpisodesLoading(true);
          const episodeIds = extractEpisodeIds(characterData.episode);
          const episodeData = await api.getEpisodes(episodeIds);
          setEpisodes(episodeData);
          setEpisodesLoading(false);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch character details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacterData();
    }
  }, [id]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "#55cc44";
      case "dead":
        return "#d63d2e";
      default:
        return "#9e9e9e";
    }
  };

  const getGenderIcon = (gender) => {
    switch (gender?.toLowerCase()) {
      case "male":
        return "♂️";
      case "female":
        return "♀️";
      default:
        return "⚪";
    }
  };

  if (loading) {
    return (
      <div className="character-detail-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading character details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="character-detail-container">
        <div className="error-container">
          <h2>Character Not Found</h2>
          <p>{error}</p>
          <Link to="/" className="back-btn">
            ← Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="character-detail-container">
        <div className="error-container">
          <h2>Character Not Found</h2>
          <p>The character you're looking for doesn't exist.</p>
          <Link to="/" className="back-btn">
            ← Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="character-detail-container">
      <div className="character-detail-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
        <Link to="/" className="home-link">
          All Characters
        </Link>
      </div>

      <div className="character-detail-content">
        <div className="character-image-section">
          <img
            src={character.image}
            alt={character.name}
            className="character-detail-image"
          />
          <div className="character-status-badge">
            <span
              className="status-indicator"
              style={{ backgroundColor: getStatusColor(character.status) }}
            ></span>
            <span className="status-text">{character.status}</span>
          </div>
        </div>

        <div className="character-info-section">
          <h1 className="character-name">{character.name}</h1>

          <div className="character-details">
            <div className="detail-item">
              <span className="label">Species:</span>
              <span className="value">{character.species}</span>
            </div>

            <div className="detail-item">
              <span className="label">Gender:</span>
              <span className="value">
                {getGenderIcon(character.gender)} {character.gender}
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Origin:</span>
              <span className="value">
                {character.origin?.name || "Unknown"}
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Last known location:</span>
              <span className="value">
                {character.location?.name || "Unknown"}
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Number of episodes:</span>
              <span className="value episodes-count">
                {character.episode?.length || 0} episodes
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Created:</span>
              <span className="value">
                {new Date(character.created).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {character.episode && character.episode.length > 0 && (
        <div className="episodes-section">
          <h2>Episodes Appeared In</h2>

          {episodesLoading ? (
            <div className="episodes-loading">
              <div className="loading-spinner small"></div>
              <p>Loading episode details...</p>
            </div>
          ) : (
            <div className="episodes-grid">
              {episodes.map((episode) => (
                <div key={episode.id} className="episode-card">
                  <div className="episode-number">{episode.episode}</div>
                  <h3 className="episode-title">{episode.name}</h3>
                  <p className="episode-air-date">Aired: {episode.air_date}</p>
                  <p className="episode-characters">
                    {episode.characters?.length || 0} characters
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
