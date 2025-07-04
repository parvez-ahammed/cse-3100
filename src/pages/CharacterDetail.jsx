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
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid mb-3"
        style={{ maxWidth: "300px" }}
      />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin?.name} <br />
        <strong>Last known location:</strong> {character.location?.name} <br />
        <strong>Episode count:</strong> {character.episode?.length}
      </p>
    </div>
  );
}
