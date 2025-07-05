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
    <div className="flex flex-col items-center p-4 bg-green-100">
      <h2 className="text-3xl font-bold p-6">{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid p-6"
      />
      <p className="text-lg p-6 flex flex-col">
        <div>
          <strong>Status:</strong> {character.status} <br />
        </div>
        <div>
          <strong>Species:</strong> {character.species} <br />
        </div>
        <div>
          <strong>Origin:</strong> {character.origin.name} <br />
        </div>
        <div>
          <strong>Last known location:</strong> {character.location.name} <br />
        </div>
        <div>
          <strong>Number of Episodes they appeared in:</strong>{" "}
          {character.episode.length} <br />
        </div>
      </p>
    </div>
  );
}
