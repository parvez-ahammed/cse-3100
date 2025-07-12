import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);

      // Fetch episodes
      const episodeUrls = data.episode;
      const episodeIds = episodeUrls.map((url) => url.split("/").pop()); // Extract IDs
      const episodeRes = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
      );
      const episodeData = await episodeRes.json();

      // Handle single or multiple episodes
      setEpisodes(Array.isArray(episodeData) ? episodeData : [episodeData]);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid mb-3"
      />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin?.name} <br />
        <strong>Last known location:</strong> {character.location?.name} <br />
        <strong>Total Episodes:</strong> {episodes.length}
      </p>

      <h4 className="mt-4">Episodes</h4>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            {ep.episode} - {ep.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
