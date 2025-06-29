import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchCharacterData = async () => {
      try {
        const characterRes = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!characterRes.ok) throw new Error("Character not found");
        const characterData = await characterRes.json();
        setCharacter(characterData);

        const episodePromises = characterData.episode.map((url) => fetch(url).then((res) => res.json()));
        const episodesData = await Promise.all(episodePromises);
        setEpisodes(episodesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin?.name || "Unknown"} <br />
        <strong>Last Known Location:</strong> {character.location?.name || "Unknown"} <br />
        <strong>Number of episodes they appeared in:</strong> {character.episode.length} <br />
      </p>

      <h3>Episodes</h3>
      <ul>
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <li key={`${episode.season}-${episode.number}`}>
              <strong>{episode.name}</strong> (Season {episode.season}, Episode {episode.number}) - {episode.air_date}
            </li>
          ))
        ) : (
          <p>Loading episode data...</p>
        )}
      </ul>
    </div>
  );
}





