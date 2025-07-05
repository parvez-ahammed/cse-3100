// About page component - displays static information about the app, developer, and a quote
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Page title */}
      <h2 className={styles.title}>About Rick & Morty Explorer</h2>
      
      {/* App description section */}
      <div className={styles.section}>
        <p className={styles.appDescription}>
          <strong>Rick & Morty Explorer</strong> is a React single-page application that allows users to browse, search, and filter characters from the Rick and Morty universe. You can view detailed information about each character, use advanced filters, and enjoy a modern, responsive UI. This app is built as part of the CSE-3100 Software Development Lab assignment.
        </p>
      </div>
      
      <div className={styles.divider}></div>
      
      {/* Developer info section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Developer</h3>
        <div className={styles.developerInfo}>
          <h4 className={styles.developerName}>Maisha Momtaz Meem</h4>
          <p className={styles.developerRole}>
            ID: 20220104049<br />
            Lab group: A1<br />
            Course: CSE-3100
          </p>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      {/* Favorite quote section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Favorite Rick & Morty Quote</h3>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>"Sometimes science is more art than science, Morty. A lot of people don't get that."</p>
          <p className={styles.quoteAuthor}>— Rick Sanchez</p>
        </div>
      </div>
      
      {/* API attribution */}
      <div className={styles.section}>
        <div className={styles.apiInfo}>
          <p>This application uses the <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">Rick and Morty API</a></p>
        </div>
      </div>
    </div>
  );
}
