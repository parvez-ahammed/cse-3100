import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/CharacterDetail.css';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [episodesLoading, setEpisodesLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterAndEpisodes = async () => {
            try {
                setLoading(true);
                setError(null);

                const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!characterResponse.ok) throw new Error('Character not found');
                const characterData = await characterResponse.json();
                setCharacter(characterData);

                if (characterData.episode && characterData.episode.length > 0) {
                    setEpisodesLoading(true);
                    const episodeIds = characterData.episode.map(url => url.split('/').pop()).join(',');
                    const episodesResponse = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
                    let episodesData = await episodesResponse.json();
                    if (!Array.isArray(episodesData)) episodesData = [episodesData];
                    setEpisodes(episodesData);
                } else {
                    setEpisodes([]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                setEpisodesLoading(false);
            }
        };

        fetchCharacterAndEpisodes();
    }, [id]);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'alive': return '#55cc44';
            case 'dead': return '#d63d2e';
            case 'unknown': return '#9e9e9e';
            default: return '#9e9e9e';
        }
    };

    const getGenderIcon = (gender) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '♂️';
            case 'female': return '♀️';
            case 'genderless': return '⚲';
            default: return '❓';
        }
    };

    const getSpeciesIcon = (species) => {
        switch (species?.toLowerCase()) {
            case 'human': return '👨‍💼';
            case 'alien': return '👽';
            case 'robot': return '🤖';
            case 'cronenberg': return '🧟';
            case 'animal': return '🦊';
            default: return '🌟';
        }
    };

    const getSeasonFromEpisode = (episode) => {
        const match = episode.match(/S(\d+)/);
        return match ? parseInt(match[1]) : 1;
    };

    if (loading) {
        return (
            <div className="character-detail-container">
                <div className="loading-detail">
                    <div className="portal-spinner-large">
                        <div className="portal-ring"></div>
                        <div className="portal-ring"></div>
                        <div className="portal-ring"></div>
                    </div>
                    <p className="loading-text">Loading character details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="character-detail-container">
                <div className="error-detail">
                    <div className="error-icon">⚠️</div>
                    <h2 className="error-title">Character Not Found</h2>
                    <p className="error-message">{error}</p>
                    <button onClick={() => navigate('/')} className="back-home-btn">
                        ← Back to Characters
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="character-detail-container">
            <div className="character-detail-header">
                <button onClick={() => navigate('/')} className="back-btn">
                    ← Back to Characters
                </button>
                <div className="character-id-badge">Character #{character.id}</div>
            </div>

            <div className="character-detail-content">
                {/* Character Hero Section */}
                <div className="character-hero-section">
                    <div className="character-image-wrapper">
                        <img
                            className="character-detail-image"
                            src={character.image}
                            alt={character.name}
                        />
                        <div className="character-status-overlay">
                            <span
                                className="status-indicator-large"
                                style={{ background: getStatusColor(character.status) }}
                            ></span>
                            <span className="status-text-large">{character.status}</span>
                        </div>
                    </div>
                    <div className="character-info-section">
                        <h1 className="character-detail-name">{character.name}</h1>
                        <div className="character-details-grid">
                            <div className="detail-card">
                                <span className="detail-icon">{getSpeciesIcon(character.species)}</span>
                                <div className="detail-content">
                                    <span className="detail-label">Species</span>
                                    <span className="detail-value">{character.species}</span>
                                </div>
                            </div>
                            <div className="detail-card">
                                <span className="detail-icon">{getGenderIcon(character.gender)}</span>
                                <div className="detail-content">
                                    <span className="detail-label">Gender</span>
                                    <span className="detail-value">{character.gender}</span>
                                </div>
                            </div>
                            <div className="detail-card">
                                <span className="detail-icon">🌍</span>
                                <div className="detail-content">
                                    <span className="detail-label">Origin</span>
                                    <span className="detail-value">{character.origin?.name}</span>
                                </div>
                            </div>
                            <div className="detail-card">
                                <span className="detail-icon">📍</span>
                                <div className="detail-content">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">{character.location?.name}</span>
                                </div>
                            </div>
                            <div className="detail-card full-width">
                                <span className="detail-icon">🆔</span>
                                <div className="detail-content">
                                    <span className="detail-label">Created</span>
                                    <span className="detail-value">{new Date(character.created).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Episodes Section - Below Character Details */}
            <div className="episodes-section">
                <div className="episodes-header">
                    <h2 className="episodes-title">
                        <span className="episodes-icon">📺</span>
                        Episodes Appeared In
                        <span className="episodes-count-badge">{episodes.length}</span>
                    </h2>
                </div>
                {episodesLoading ? (
                    <div className="episodes-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading episodes...</p>
                    </div>
                ) : (
                    <div className="episodes-grid">
                        {episodes.map((episode, index) => (
                            <div key={episode.id} className="episode-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="episode-header">
                                    <div className="episode-number">{episode.episode}</div>
                                    <div className="episode-season">
                                        Season {getSeasonFromEpisode(episode.episode)}
                                    </div>
                                </div>
                                <div className="episode-content">
                                    <h3 className="episode-title">{episode.name}</h3>
                                    <div className="episode-air-date">
                                        <span className="air-date-icon">📅</span>
                                        <span>Aired: {episode.air_date}</span>
                                    </div>
                                    <div className="episode-characters-count">
                                        <span className="characters-icon">👥</span>
                                        <span>{episode.characters.length} characters</span>
                                    </div>
                                </div>
                                <div className="episode-footer">
                                    <div className="episode-id">Episode #{episode.id}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CharacterDetail;