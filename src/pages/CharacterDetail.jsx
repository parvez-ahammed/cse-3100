
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container py-4">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Episodes: {character.episode.length}</p>
    </div>
  );
}
