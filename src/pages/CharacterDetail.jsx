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
    <div className="max-w-6xl mx-auto p-4 mt-4"> 
      
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">{character.name}</h1>  
      
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
          src={character.image}
          className="rounded-lg w-64 h-64 object-cover"/>
        
      <div className="flex-1 space-y-4 text-gray-700 w-full md:w-auto">
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-xl text-gray-800">Status:</span>
          <span className="text-xl text-gray-600">{character.status}</span>
          </div>
    
    
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-xl text-gray-800">Species:</span>
          <span className="text-xl text-gray-600">{character.species}</span>
          </div>
    
    
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-xl text-gray-800">Origin:</span>
          <span className="text-xl text-gray-600">{character.origin?.name}</span>
          </div>
    
    
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-xl text-gray-800">Location:</span>
          <span className="text-xl text-gray-600">{character.location?.name}</span>
          </div>
    
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-xl text-gray-800">Episode:</span>
          <span className="text-xl text-gray-600">{character.episode?.length}</span>
          </div>
    </div>
    </div>
    </div>
  );
}
