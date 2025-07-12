import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) throw new Error('Failed to fetch character');
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'alive':
        return '🟢';
      case 'dead':
        return '🔴';
      default:
        return '⚪';
    }
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!character) return null;

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '2rem auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{character.name}</h2>

      <img
        src={character.image}
        alt={character.name}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '4px solid #eee',
        }}
      />

      <p><strong>Status:</strong> {getStatusIcon(character.status)} {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin?.name}</p>
      <p><strong>Last known location:</strong> {character.location?.name}</p>
      <p><strong>Number of episodes:</strong> {character.episode?.length}</p>
    </div>
  );
}
