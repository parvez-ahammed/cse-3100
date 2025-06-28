import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} style={{ width: '200px' }} />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Last known location:</strong> {character.location.name}</p>
      <p><strong>Number of episodes:</strong> {character.episode.length}</p>
    </div>
  );
}
