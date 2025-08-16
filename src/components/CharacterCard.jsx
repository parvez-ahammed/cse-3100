import { useNavigate } from "react-router-dom";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/character/${character.id}`);

  // Determine status indicator class
  const getStatusClass = () => {
    switch(character.status.toLowerCase()) {
      case 'alive': return styles.statusAlive;
      case 'dead': return styles.statusDead;
      default: return styles.statusUnknown;
    }
  };

  return (
    <div className={styles.card} onClick={goToDetail}>
      <div className={styles.cardImageWrapper}>
        <img
          src={character.image}
          className={styles.cardImg}
          alt={character.name}
          loading="lazy"
        />
        <div className={styles.cardOverlay}>
          <button 
            className={styles.viewButton} 
            onClick={e => { e.stopPropagation(); goToDetail(); }}
          >
            View Profile
          </button>
        </div>
        <div className={`${styles.statusBadge} ${getStatusClass()}`}>
          {character.status}
        </div>
      </div>
      
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{character.name}</h3>
        
        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Species</span>
            <span className={styles.infoValue}>{character.species}</span>
          </div>
          
          {character.type && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Type</span>
              <span className={styles.infoValue}>{character.type}</span>
            </div>
          )}
          
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Gender</span>
            <span className={styles.infoValue}>{character.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
}