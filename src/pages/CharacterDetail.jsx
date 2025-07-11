import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        const episodeIds = data.episode.map((ep) => ep.split("/").pop());
        fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`)
          .then((res) => res.json())
          .then((epData) => {
            setEpisodes(Array.isArray(epData) ? epData : [epData]);
          });
      });
  }, [id]);

  if (!character) return <div className="text-center text-gray-500 p-10">Loading character details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg mt-8">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-48 object-cover rounded-2xl shadow-md"
        />
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <div className="grid grid-cols-2 gap-x-4 text-sm">
            <p><span className="font-semibold">Status:</span> {character.status}</p>
            <p><span className="font-semibold">Species:</span> {character.species}</p>
            <p><span className="font-semibold">Origin:</span> {character.origin.name}</p>
            <p><span className="font-semibold">Last location:</span> {character.location.name}</p>
            <p className="col-span-2"><span className="font-semibold">Total Episodes:</span> {episodes.length}</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
