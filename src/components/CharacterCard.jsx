import React from 'react';

export default function CharacterCard({ character, darkMode }) {
  const cardStyle = {
    backgroundColor: darkMode ? '#2c2c2c' : '#fff',
    borderRadius: '12px',
    boxShadow: darkMode
      ? '0 4px 12px rgba(255, 255, 255, 0.1)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textAlign: 'center',
    color: darkMode ? '#eee' : '#000',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    filter: darkMode ? 'brightness(0.9)' : 'none',
  };

  const contentStyle = {
    padding: '1rem',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  };

  const textStyle = {
    color: darkMode ? '#ccc' : '#555',
    margin: '0.25rem 0',
  };

  return (
    <div style={cardStyle}>
      <img src={character.image} alt={character.name} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={nameStyle}>{character.name}</h3>
        <p style={textStyle}>Status: {character.status}</p>
        <p style={textStyle}>Species: {character.species}</p>
      </div>
    </div>
  );
}
