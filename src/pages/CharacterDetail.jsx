import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CharacterDetail.module.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeTitles, setEpisodeTitles] = useState([]);
  const [episodesLoading, setEpisodesLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch character data
  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) throw new Error("Character not found");
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  // Fetch episode titles
  useEffect(() => {
    const fetchEpisodes = async () => {
      if (!character?.episode?.length) {
        setEpisodeTitles([]);
        return;
      }
      
      setEpisodesLoading(true);
      try {
        const episodePromises = character.episode.map(async (epUrl) => {
          try {
            const res = await fetch(epUrl);
            const data = await res.json();
            return { name: data.name, episode: data.episode };
          } catch {
            return null;
          }
        });
        
        const episodes = await Promise.all(episodePromises);
        setEpisodeTitles(episodes.filter(Boolean));
      } finally {
        setEpisodesLoading(false);
      }
    };
    
    fetchEpisodes();
  }, [character]);

  // Loading state
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <div className={styles.loadingText}>Loading character data...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <div className={styles.errorMessage}>{error}</div>
        <Link to="/" className={styles.backButton}>Back to Characters</Link>
      </div>
    );
  }

  // Get status class
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'alive': return styles.statusAlive;
      case 'dead': return styles.statusDead;
      default: return styles.statusUnknown;
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back to Characters
      </Link>
      
      <div className={styles.characterProfile}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImageWrapper}>
            <img 
              src={character.image} 
              alt={character.name} 
              className={styles.profileImage} 
            />
            <div className={`${styles.statusIndicator} ${getStatusClass(character.status)}`}>
              {character.status}
            </div>
          </div>
          
          <div className={styles.profileInfo}>
            <h1 className={styles.characterName}>{character.name}</h1>
            
            <div className={styles.characterMeta}>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Species</div>
                <div className={styles.metaValue}>{character.species}</div>
              </div>
              
              {character.type && (
                <div className={styles.metaItem}>
                  <div className={styles.metaLabel}>Type</div>
                  <div className={styles.metaValue}>{character.type}</div>
                </div>
              )}
              
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Gender</div>
                <div className={styles.metaValue}>{character.gender}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.profileContent}>
          <div className={styles.locationSection}>
            <h2 className={styles.sectionTitle}>Location Information</h2>
            
            <div className={styles.locationCards}>
              <div className={styles.locationCard}>
                <div className={styles.locationIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div className={styles.locationInfo}>
                  <div className={styles.locationLabel}>Origin</div>
                  <div className={styles.locationName}>{character.origin?.name}</div>
                </div>
              </div>
              
              <div className={styles.locationCard}>
                <div className={styles.locationIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327z"/>
                  </svg>
                </div>
                <div className={styles.locationInfo}>
                  <div className={styles.locationLabel}>Last Known Location</div>
                  <div className={styles.locationName}>{character.location?.name}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.episodesSection}>
            <h2 className={styles.sectionTitle}>
              Episode Appearances
              <span className={styles.episodeCount}>{character.episode?.length || 0}</span>
            </h2>
            
            {episodesLoading ? (
              <div className={styles.episodesLoading}>
                <div className={styles.loadingSpinner}></div>
                <div>Loading episodes...</div>
              </div>
            ) : episodeTitles.length > 0 ? (
              <div className={styles.episodesList}>
                {episodeTitles.map((ep, idx) => (
                  <div className={styles.episodeItem} key={idx}>
                    <div className={styles.episodeCode}>{ep.episode}</div>
                    <div className={styles.episodeTitle}>{ep.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.noEpisodes}>No episode data found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
