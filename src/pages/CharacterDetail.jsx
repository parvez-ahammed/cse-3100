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
 console.log("Character:", character);
  if (!character) return <p>Loading...</p>;


  return (
  <div className="container my-4">
    <h2>{character.name}</h2>
    <img src={character.image} alt={character.name} className="img-fluid" />
    <p>
      <strong>Status:</strong> {character.status} <br />
      <strong>Species:</strong> {character.species} <br />
      <strong>Origin:</strong> {character.origin.name} <br />
      <strong>Last Known Location:</strong> {character.location.name} <br />
      <strong>Number of Episodes:</strong> {character.episode.length}
    </p>
  </div>
);

}
