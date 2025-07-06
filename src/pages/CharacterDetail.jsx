import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Character not found");
        return res.json();
      })
      .then((data) => setCharacter(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>Error: {error}</p>;
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
        <strong>Episodes:</strong> {character.episode.length}
      </p>
    </div>
  );
}