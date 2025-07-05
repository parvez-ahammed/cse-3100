import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "/src/style.css";


export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin?.name}</p>
      <p><strong>Last known location:</strong> {character.location?.name}</p>
      <p><strong>Episodes appeared in:</strong> {character.episode.length}</p>
    </div>
  );
}
