import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeTitles, setEpisodeTitles] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(async (data) => {
        setCharacter(data);

        // Bonus: fetch episode titles
        if (data.episode && data.episode.length > 0) {
          const episodePromises = data.episode.map((url) =>
            fetch(url).then((res) => res.json())
          );
          const episodes = await Promise.all(episodePromises);
          setEpisodeTitles(episodes.map((ep) => ep.name));
        }
      });
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid mb-3" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin?.name} <br />
        <strong>Last known location:</strong> {character.location?.name} <br />
        <strong>Number of episodes:</strong> {character.episode.length}
      </p>
      {episodeTitles.length > 0 && (
        <>
          <h4>Episodes:</h4>
          <ul>
            {episodeTitles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
