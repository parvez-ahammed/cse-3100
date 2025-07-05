import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api, extractEpisodeIds } from "../common/api";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Component state
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [episodesLoading, setEpisodesLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if no ID
    if (!id) return;

    const loadCharacterDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch main character data first
        const characterData = await api.getCharacter(id);
        setCharacter(characterData);

        // Then fetch episode details if character has episodes
        if (characterData.episode?.length > 0) {
          setEpisodesLoading(true);
          try {
            const episodeIds = extractEpisodeIds(characterData.episode);
            const episodeData = await api.getEpisodes(episodeIds);
            setEpisodes(episodeData);
          } catch (episodeErr) {
            // Don't break the whole page if episodes fail to load
            console.warn('Failed to load episode details:', episodeErr);
            setEpisodes([]);
          } finally {
            setEpisodesLoading(false);
          }
        }
      } catch (err) {
        const errorMessage = err.message || "Failed to load character";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacterDetails();
  }, [id]);

  // Helper functions for display
  const getStatusColor = (status) => {
    const statusColors = {
      alive: "#10b981",
      dead: "#ef4444",
      unknown: "#6b7280"
    };
    return statusColors[status?.toLowerCase()] || statusColors.unknown;
  };

  const getGenderIcon = (gender) => {
    const genderIcons = {
      male: "♂️",
      female: "♀️",
      genderless: "⚪",
      unknown: "❓"
    };
    return genderIcons[gender?.toLowerCase()] || genderIcons.unknown;
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return "Unknown date";
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="character-detail-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading character details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="character-detail-container">
        <div className="error-container">
          <h2>Character Not Found</h2>
          <p>{error}</p>
          <Link to="/" className="back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  // No character found
  if (!character) {
    return (
      <div className="character-detail-container">
        <div className="error-container">
          <h2>Character Not Found</h2>
          <p>The character you're looking for doesn't exist.</p>
          <Link to="/" className="back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  const hasEpisodes = character.episode?.length > 0;

  return (
    <div className="character-detail-container">
      {/* Header with navigation */}
      <div className="character-detail-header">
        <button onClick={goBack} className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <Link to="/" className="home-link">
          All Characters
        </Link>
      </div>

      {/* Main character info */}
      <div className="character-detail-content">
        <div className="character-image-section">
          <img
            src={character.image}
            alt={`${character.name} portrait`}
            className="character-detail-image"
          />
          <div className="character-status-badge">
            <span
              className="status-indicator"
              style={{ backgroundColor: getStatusColor(character.status) }}
            />
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
              <span className="value">{character.origin?.name || "Unknown"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Last known location:</span>
              <span className="value">{character.location?.name || "Unknown"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Episodes:</span>
              <span className="value episodes-count">
                {character.episode?.length || 0} episodes
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Created:</span>
              <span className="value">{formatDate(character.created)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes section */}
      {hasEpisodes && (
        <div className="episodes-section">
          <h2>Episodes</h2>

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
