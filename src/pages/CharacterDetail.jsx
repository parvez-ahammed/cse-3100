import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeNames, setEpisodeNames] = useState([]);
  const [showEpisodes, setShowEpisodes] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(async (data) => {
        setCharacter(data);

        const episodeUrls = data.episode || [];
        try {
          const episodeFetches = episodeUrls.map((url) => fetch(url));
          const responses = await Promise.all(episodeFetches);
          const episodesData = await Promise.all(
            responses.map((res) => res.json())
          );
          const names = episodesData.map((ep) => ep.name);
          setEpisodeNames(names);
        } catch (err) {
          setEpisodeNames([]);
        }
      });
  }, [id]);

  if (!character)
    return <p className="loading-message">Loading character details...</p>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="image-section">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
        </div>
        <div className="info-section">
          <h2 className="character-name">{character.name}</h2>

          <div className="info-row">
            <span className="label">Status:</span>
            <span className="value">{character.status}</span>
          </div>
          <div className="info-row">
            <span className="label">Species:</span>
            <span className="value">{character.species}</span>
          </div>
          <div className="info-row">
            <span className="label">Origin:</span>
            <span className="value">{character.origin?.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Location:</span>
            <span className="value">{character.location?.name}</span>
          </div>

          <div className="info-row episode-toggle" onClick={() => setShowEpisodes((prev) => !prev)}>
            <span className="label">Episodes:</span>
            <span className="value toggle-icon">
              {character.episode?.length} {showEpisodes ? "▲" : "▼"}
            </span>
          </div>

          {showEpisodes && (
            <div className="episode-dropdown">
              <ul>
                {episodeNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
