import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);

       
        const episodeUrls = data.episode.slice(0, 5); 
        const episodePromises = episodeUrls.map((url) => fetch(url).then(res => res.json()));
        const episodeData = await Promise.all(episodePromises);
        setEpisodes(episodeData.map(ep => ep.name));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found</p>;

  return (
    <div className="container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} style={{ width: "200px", borderRadius: "10px" }} />
      <ul>
        <li><strong>Status:</strong> {character.status}</li>
        <li><strong>Species:</strong> {character.species}</li>
        <li><strong>Origin:</strong> {character.origin.name}</li>
        <li><strong>Last Known Location:</strong> {character.location.name}</li>
        <li><strong>Episodes:</strong> {character.episode.length}</li>
      </ul>

      <h4>Episode Titles:</h4>
      <ul>
        {episodes.map((ep, idx) => (
          <li key={idx}>{ep}</li>
        ))}
      </ul>
    </div>
  );
}
