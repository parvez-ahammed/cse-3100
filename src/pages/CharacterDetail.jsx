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

  if (!character)
    return <div className="text-center my-10 text-lg">Loading...</div>;

  return (
    <div className="flex justify-center my-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-72 object-cover rounded-t-2xl"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            {character.name}
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Status:</span> {character.status}
            </p>
            <p>
              <span className="font-semibold">Species:</span>{" "}
              {character.species}
            </p>
            <p>
              <span className="font-semibold">Origin:</span>{" "}
              {character.origin?.name}
            </p>
            <p>
              <span className="font-semibold">Last known location:</span>{" "}
              {character.location?.name}
            </p>
            <p>
              <span className="font-semibold">Number of episodes:</span>{" "}
              {character.episode.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
