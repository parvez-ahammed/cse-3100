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

  if (!character) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto my-8 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="w-64 mx-auto rounded shadow mb-4"
      />
      <p className="text-lg">
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin.name} <br />
        <strong>Last Location:</strong> {character.location.name} <br />
        <strong>Episodes:</strong> {character.episode.length}
      </p>
    </div>
  );
}
