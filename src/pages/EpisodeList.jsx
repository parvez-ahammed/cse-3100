import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function EpisodeList() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodes() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();

      const episodeUrls = data.episode;
      const episodeIds = episodeUrls.map(url => url.split("/").pop());
      const epRes = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`);
      const epData = await epRes.json();

      setEpisodes(Array.isArray(epData) ? epData : [epData]);
      setLoading(false);
    }

    fetchEpisodes();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading Episodes...</div>;

  return (
    <>
    <Navbar />
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Appeared in Episode: </h1>
      <ul className="space-y-3">
        {episodes.map(ep => (
          <li key={ep.id} className="p-4 border rounded shadow hover:bg-gray-50">
            <p className="font-semibold">{ep.name}</p>
            <p className="text-sm text-gray-500">{ep.episode} | {ep.air_date}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
