// Import useNavigate for programmatic navigation
import { useNavigate } from "react-router-dom";
// Import CSS module
import styles from "./CharacterCard.module.css";

// CharacterCard component displays a single character's info
// Props: character - an object containing character data
export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  // Function to navigate to the character detail page
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
    // Card container, clickable to go to character detail
    <div className={styles.card} onClick={goToDetail}>
      {/* Character image */}
      <img
        src={character.image}
        className={styles.cardImg}
        alt={character.name}
      />
      <div className={styles.cardBody}>
        {/* Character name */}
        <h5 className={styles.cardTitle}>{character.name}</h5>
        {/* Character status and species */}
        <p className={styles.cardText}>
          <span className={`${styles.statusIndicator} ${getStatusClass()}`}></span>
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        {/* Button to view details, stops propagation to prevent double navigation */}
        <button 
          className={styles.viewButton} 
          onClick={e => { e.stopPropagation(); goToDetail(); }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
