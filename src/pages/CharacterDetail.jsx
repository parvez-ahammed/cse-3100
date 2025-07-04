import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <div>Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 object-cover rounded-xl shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
          <ul className="space-y-2">
            <li>
              <strong>Status:</strong> {character.status}
            </li>
            <li>
              <strong>Species:</strong> {character.species}
            </li>
            <li>
              <strong>Origin:</strong> {character.origin.name}
            </li>
            <li>
              <strong>Last Location:</strong> {character.location.name}
            </li>
            <li>
              <strong>Episodes:</strong> {character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
