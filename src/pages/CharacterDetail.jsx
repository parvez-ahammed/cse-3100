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

  console.log(character)

  return (
    <div className="flex justify-center items-center my-12 px-4">
      <div className="flex flex-col items-center border-2 border-gray-300 rounded-2xl p-8 max-w-2xl w-full bg-white shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 object-cover rounded-full mb-6"
        />
        <div className="text-gray-700 space-y-3 text-center">
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl m-3 underline" >Episodes</p>
          {character.episode.map((items,index)=>{
            return <p className="text-black font-semibold cursor-pointer" > {index} - {items}</p>
          })}
        </div>
      </div>
    </div>
  );
}
