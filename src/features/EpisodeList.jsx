import { useEffect, useState } from "react";

export default function EpisodeList({ episodeIds }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!episodeIds || episodeIds.length === 0) {
      setEpisodes([]);
      setLoading(false);
      return;
    }
    const fetchEpisodes = async () => {
      setLoading(true);
      setError("");
      try {
        const ids = episodeIds.join(",");
        const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
        if (!res.ok) throw new Error("Failed to fetch episodes");
        let data = await res.json();
        // If only one episode, API returns an object, not array
        if (!Array.isArray(data)) data = [data];
        setEpisodes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, [episodeIds]);

  if (loading) return <p className="text-center text-blue-600 font-semibold">Loading episodes...</p>;
  if (error) return <p className="text-center text-red-600 font-semibold">{error}</p>;
  if (!episodes.length) return <p className="text-center text-gray-500">No episodes found.</p>;

  return (
    <div className="max-w-6xl mx-auto py-8 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col justify-between transition-all"
            style={{ minHeight: 180 }}
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-lg">{ep.name}</span>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full ml-2 mt-1">
                  {ep.episode}
                </span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="block">Aired: {ep.air_date}</span>
                <span className="block">{ep.characters.length} characters</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}