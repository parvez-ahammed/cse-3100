import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading.jsx";
import '../css/CharacterDetail.css';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeTitles, setEpisodeTitles] = useState([]);

  useEffect(() => {
    setCharacter(null); // Show loading on id change
    setEpisodeTitles([]);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        // Fetch episode titles
        if (data.episode && data.episode.length > 0) {
          // Get episode IDs from URLs
          const episodeIds = data.episode.map(url => url.split('/').pop()).join(',');
          fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
            .then(res => res.json())
            .then(episodes => {
              // API returns object for 1, array for many
              if (Array.isArray(episodes)) {
                setEpisodeTitles(episodes.map(ep => ep.name));
              } else if (episodes && episodes.name) {
                setEpisodeTitles([episodes.name]);
              }
            });
        }
      });
  }, [id]);

  if (!character) return <Loading />;

  return (
    <div className="character-detail-container">
      <h2 className="character-detail-title">{character.name}</h2>
      <img src={character.image} alt={character.name} className="character-detail-img" />
      <div className="character-detail-info">
        <p>
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species} <br />
          <strong>Origin:</strong> {character.origin?.name} <br />
          <strong>Last known location:</strong> {character.location?.name} <br />
          <strong>Number of episodes:</strong> {character.episode?.length}
        </p>
        {episodeTitles.length > 0 && (
          <div style={{ marginTop: "1.2rem" }}>
            <strong>Episodes:</strong>
            <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
              {episodeTitles.map((title, idx) => (
                <li key={idx} style={{ fontSize: "1em" }}>{title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}