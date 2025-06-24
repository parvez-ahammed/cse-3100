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
    return <p className="p-4 text-gray-500 text-center">Please wait..</p>;
  else
    return (
      <div className="max-w-6xl mx-auto p-4 mt-4 flex flex-col md:flex-row rounded-lg">
        <div className="flex flex-col items-center md:items-start mr-4">
          <img
            src={character.image}
            className="rounded-lg w-100 h-100 object-cover"
          />
        </div>
        <div className="mt-6 md:ml-8 md:mt-0 flex-1 space-y-3 text-gray-600">
          <h1 className="text-5xl font-extrabold text-black my-8">
            {character.name}
          </h1>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-bold text-gray-800 text-2xl lg:text-3xl">
              Status
            </span>
            <span className="font-light text-xl lg:text-3xl">
              {character.status}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-bold text-gray-800 text-2xl lg:text-3xl">
              Species
            </span>
            <span className="font-light text-xl lg:text-3xl">
              {character.species}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-bold text-gray-800 text-2xl lg:text-3xl">
              Origin
            </span>
            <span className="font-light text-xl lg:text-3xl">
              {character.origin?.name}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-bold text-gray-800 text-2xl lg:text-3xl">
              Location
            </span>
            <span className="font-light text-xl lg:text-3xl">
              {character.location?.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-900 text-2xl lg:text-3xl">
              Episodes
            </span>
            <span className="font-light text-xl lg:text-3xl">
              {character.episode?.length}
            </span>
          </div>
        </div>
      </div>
    );
}
