// Import useParams for accessing route parameters and hooks for state/effect
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Import CSS module
import styles from "./CharacterDetail.module.css";

// CharacterDetail component displays detailed info for a selected character
export default function CharacterDetail() {
  // Get character ID from route params
  const { id } = useParams();
  // State to hold fetched character data
  const [character, setCharacter] = useState(null);
  // State to hold episode titles
  const [episodeTitles, setEpisodeTitles] = useState([]);
  // State for loading episodes
  const [episodesLoading, setEpisodesLoading] = useState(false);

  // Fetch character data when component mounts or ID changes
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  // Fetch episode titles when character data is loaded
  useEffect(() => {
    if (character && character.episode && character.episode.length > 0) {
      setEpisodesLoading(true);
      Promise.all(
        character.episode.map(epUrl =>
          fetch(epUrl)
            .then(res => res.json())
            .then(data => data.name)
            .catch(() => null)
        )
      ).then(titles => {
        setEpisodeTitles(titles.filter(Boolean));
        setEpisodesLoading(false);
      });
    } else {
      setEpisodeTitles([]);
    }
  }, [character]);

  // Show loading state while fetching
  if (!character) return <div className={styles.loadingText}>Loading character data...</div>;

  // Get status class for the status indicator
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'alive': return styles.statusAlive;
      case 'dead': return styles.statusDead;
      default: return styles.statusUnknown;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.characterHeader}>
        {/* Character name */}
        <h2 className={styles.characterName}>{character.name}</h2>
        {/* Character image */}
        <img 
          src={character.image} 
          alt={character.name} 
          className={styles.characterImage} 
        />
      </div>
      
      {/* Character info card */}
      <div className={styles.infoCard}>
        <h3 className={styles.infoTitle}>Character Information</h3>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Status:</span>
            <span className={styles.infoValue}>
              <span className={`${styles.statusIndicator} ${getStatusClass(character.status)}`}></span>
              {character.status}
            </span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Species:</span>
            <span className={styles.infoValue}>{character.species}</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Origin:</span>
            <span className={styles.infoValue}>{character.origin?.name}</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Last known location:</span>
            <span className={styles.infoValue}>{character.location?.name}</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Number of episodes:</span>
            <span className={styles.infoValue}>
              <strong>{character.episode?.length || 0}</strong>
              {character.episode?.length === 1 ? ' episode' : ' episodes'}
            </span>
          </li>
        </ul>
      </div>
      
      {/* Episodes card */}
      <div className={styles.episodesCard}>
        <h3 className={styles.infoTitle}>Episode Appearances</h3>
        {episodesLoading ? (
          <div className={styles.loadingText}>Loading episodes...</div>
        ) : episodeTitles.length > 0 ? (
          <div className={styles.episodesList}>
            {episodeTitles.map((title, idx) => (
              <div className={styles.episodeItem} key={idx}>{title}</div>
            ))}
          </div>
        ) : (
          <p>No episode data found.</p>
        )}
      </div>
    </div>
  );
}
