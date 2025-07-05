
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CharacterCard.css';

// ... rest of your existing component code remains the same
const CharacterCard = ({ character }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/character/${character.id}`);
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'alive':
                return '#55cc44';
            case 'dead':
                return '#d63d2e';
            case 'unknown':
                return '#9e9e9e';
            default:
                return '#9e9e9e';
        }
    };

    const getGenderIcon = (gender) => {
        switch (gender.toLowerCase()) {
            case 'male':
                return '♂️';
            case 'female':
                return '♀️';
            case 'genderless':
                return '⚲';
            default:
                return '❓';
        }
    };

    const getSpeciesIcon = (species) => {
        switch (species.toLowerCase()) {
            case 'human':
                return '👨‍💼';
            case 'alien':
                return '👽';
            case 'robot':
                return '🤖';
            case 'cronenberg':
                return '🧟';
            case 'animal':
                return '🦊';
            default:
                return '🌟';
        }
    };

    return (
        <div className="character-card" onClick={handleClick}>
            <div className="character-card-inner">
                <div className="character-image-container">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="character-image"
                    />
                    <div className="character-status-badge">
                        <div
                            className="status-indicator"
                            style={{ backgroundColor: getStatusColor(character.status) }}
                        ></div>
                        <span className="status-text">{character.status}</span>
                    </div>
                </div>

                <div className="character-details">
                    <div className="character-header">
                        <h3 className="character-name">{character.name}</h3>
                        <div className="character-id">#{character.id}</div>
                    </div>

                    <div className="character-info-grid">
                        <div className="info-item">
                            <div className="info-icon">{getSpeciesIcon(character.species)}</div>
                            <div className="info-content">
                                <span className="info-label">Species</span>
                                <span className="info-value">{character.species}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">{getGenderIcon(character.gender)}</div>
                            <div className="info-content">
                                <span className="info-label">Gender</span>
                                <span className="info-value">{character.gender}</span>
                            </div>
                        </div>

                        <div className="info-item location-item">
                            <div className="info-icon">🌍</div>
                            <div className="info-content">
                                <span className="info-label">Location</span>
                                <span className="info-value">{character.location.name}</span>
                            </div>
                        </div>

                        <div className="info-item origin-item">
                            <div className="info-icon">🏠</div>
                            <div className="info-content">
                                <span className="info-label">Origin</span>
                                <span className="info-value">{character.origin.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="character-footer">
                        <div className="episodes-count">
                            <span className="episodes-icon">📺</span>
                            <span className="episodes-text">
                                {character.episode.length} Episode{character.episode.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="view-more">
                            <span>View Details</span>
                            <span className="arrow">→</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;