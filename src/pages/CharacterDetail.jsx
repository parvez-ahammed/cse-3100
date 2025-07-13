
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterAndEpisodes = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
          setCharacter(null);
          setEpisodes([]);
        } else {
          setCharacter(data);
          // Fetch episode titles
          const episodeIds = data.episode.map(url => url.split('/').pop());
          if (episodeIds.length > 0) {
            const episodesRes = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`);
            const episodesData = await episodesRes.json();
            setEpisodes(Array.isArray(episodesData) ? episodesData : [episodesData]);
          } else {
            setEpisodes([]);
          }
        }
      } catch {
        setError("Failed to fetch character details");
        setCharacter(null);
        setEpisodes([]);
      }
      setLoading(false);
    };
    fetchCharacterAndEpisodes();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!character) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={character.image}
              alt={character.name}
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-gray-600">Status</h2>
                <p className="font-semibold">{character.status}</p>
              </div>
              <div>
                <h2 className="text-gray-600">Species</h2>
                <p className="font-semibold">{character.species}</p>
              </div>
              <div>
                <h2 className="text-gray-600">Origin</h2>
                <p className="font-semibold">{character.origin.name}</p>
              </div>
              <div>
                <h2 className="text-gray-600">Last Known Location</h2>
                <p className="font-semibold">{character.location.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Episodes ({episodes.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map(episode => (
              <div key={episode.id} className="p-4 bg-gray-50 rounded">
                <h3 className="font-semibold">{episode.episode}</h3>
                <p>{episode.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
