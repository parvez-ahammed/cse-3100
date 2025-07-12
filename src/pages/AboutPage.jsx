import React from 'react';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About This App</h2>
      <p style={styles.paragraph}>
        Welcome to the <strong>Rick and Morty Explorer</strong> – a fun little app where you can browse and discover characters from the wild multiverse of Rick and Morty.
      </p>
      
      <p style={styles.paragraph}>
        Nothing Done by - - <span style={styles.developer}>Syed Faiaz Hossain</span>
      </p>

      <blockquote style={styles.quote}>
        “Wubba Lubba Dub Dub!”<br />
        <span style={styles.quoteAuthor}>– Rick Sanchez</span>
      </blockquote>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f0f8ff',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2c3e50'
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px'
  },
  developer: {
    color: '#0077cc',
    fontWeight: 'bold'
  },
  quote: {
    fontStyle: 'italic',
    backgroundColor: '#e6f7ff',
    padding: '15px 20px',
    borderLeft: '5px solid #0077cc',
    borderRadius: '8px',
    marginTop: '30px',
    fontSize: '16px'
  },
  quoteAuthor: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#555'
  }
};
