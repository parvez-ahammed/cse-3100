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
       
        const episodePromises = data.episode.map((url) =>
          fetch(url).then((res) => res.json())
        );
        
        Promise.all(episodePromises).then((episodesData) => {
          setEpisodes(episodesData);
        });
      });
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin.name} <br />
        <strong>Last Known Location:</strong> {character.location.name} <br />
        <strong>Number of episodes they appeared in:</strong> {character.episode.length} <br />
      </p>

      <h3>Episodes</h3>
      <ul>
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <li key={episode.id}>
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

