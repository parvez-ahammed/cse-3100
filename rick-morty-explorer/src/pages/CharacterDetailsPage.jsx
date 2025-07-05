import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Fetch character details
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data);
        
        // Extract episode IDs
        const episodeIds = data.episode.map(ep => 
          ep.split('/').pop()
        ).join(',');
        
        // Fetch all episodes at once
        return fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
      })
      .then(res => res.json())
      .then(data => {
        // Handle single episode or multiple episodes
        setEpisodes(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen">Loading...</div>;
  if (!character) return <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen">Character not found</div>;

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={character.image} 
            alt={character.name}
            className="rounded-lg w-full"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-b pb-2 dark:border-gray-700">
              <h2 className="font-semibold">Status</h2>
              <p>{character.status}</p>
            </div>
            <div className="border-b pb-2 dark:border-gray-700">
              <h2 className="font-semibold">Species</h2>
              <p>{character.species}</p>
            </div>
            <div className="border-b pb-2 dark:border-gray-700">
              <h2 className="font-semibold">Gender</h2>
              <p>{character.gender}</p>
            </div>
            <div className="border-b pb-2 dark:border-gray-700">
              <h2 className="font-semibold">Origin</h2>
              <p>{character.origin.name}</p>
            </div>
            <div className="border-b pb-2 dark:border-gray-700">
              <h2 className="font-semibold">Location</h2>
              <p>{character.location.name}</p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Episodes</h2>
          <ul className="space-y-2">
            {episodes.map(episode => (
              <li key={episode.id} className="border-b pb-2 dark:border-gray-700">
                <Link 
                  to={`/episode/${episode.id}`}
                  className="hover:underline block py-1"
                >
                  {episode.episode} - {episode.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}