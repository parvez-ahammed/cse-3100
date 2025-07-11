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

  if (!character) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg shadow-lg w-72 h-72 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Last Known Location:</strong> {character.location.name}</p>
          <p><strong>Number of Episodes:</strong> {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
}

